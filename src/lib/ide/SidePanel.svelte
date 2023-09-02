<script>
	import { onMount } from "svelte";
	import TreeView from "./components/TreeView.svelte";

	let tree = {
		label: "tree",
	};

	let redraw = 0;

	onMount(() => {
		// @ts-ignore
		window.drawTree = (mpFirst) => {
			let root = mpFirst;

			while (root.mpParent !== null) {
				console.log("parent traverse : ", root, " to ", root.mpParent);
				root = root.mpParent;
			}

			console.log(root);

			const walkObj = (o, d) => {
				let out = {
					label: o.constructor.name,
				};
				console.log(o);
				console.log(`> ${Array(d).join("_")} ${o.constructor.name}`);

				let depth = d;

				let current = o.mpFirst;
				while (current && current?.mpNext) {
					current = current.mpNext;
					depth++;
					// console.log(depth, current);
				}

				let children = [];
				while (current) {
					// console.log(depth, current);
					// draw
					children.push(walkObj(current, depth));
					current = current.mpPrev;
					depth--;
				}

				if (children.length > 0) {
					out.children = children;
				}

				// if (o.mpFirst) {
				// 	console.log(
				// 		`|| ${Array(d).join("+")} mpFirst: ${o.mpFirst.constructor.name}`
				// 	);
				// 	walkObj(o.mpFirst, d + 1);
				// }

				// if (o.mpNext) {
				// 	console.log(`|| ${Array(d).join("+")} ${d}-next>`);
				// 	walkObj(o.mpNext, d + 1);
				// }

				return out;
			};

			let out = walkObj(root, 0);
			console.log(out);

			tree = out;

			/*
            mpParent
            mpNext
            mpPrev
            mpFirst
            */

			redraw++;
		};
	});
</script>

<div id="panel">
	<div class="tree-view">
		{#key redraw}
			<TreeView bind:tree />
		{/key}
	</div>
	<div class="properties-view">
		<!-- TODO -->
		<span>TODO</span>
	</div>
</div>

<style>
	:root {
		--accent-color: #0495f4;
		--bg-color: #21191f;
		--block-color: #3b313b;
		--active-bg-color: #191217;
	}

	#panel {
		position: fixed;
		right: 0;
		top: 0;
		bottom: 0;
		min-width: 250px;
		background: var(--bg-color);
		text-align: left;
		z-index: 10;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.tree-view {
		display: flex;
		align-items: center;
	}

	.properties-view {
		height: 100%;
		width: 100%;
		overflow: hidden;
		overflow-y: auto;
	}
</style>
