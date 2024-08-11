export let charmap: string =
	" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~";

export let small_map = {
	" ": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0,
		],
	},
	"!": {
		size: [4, 10],
		data: [
			0, 0, 1, 1, 0,
			0, 0, 1, 1, 0,
			0, 0, 1, 1, 0,
			0, 0, 1, 1, 0,
			0, 0, 1, 1, 0,
			
			0, 0, 1, 1, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 1, 1, 0,
			0, 0, 1, 1, 0
		],
	},
	"\"": {
		size: [4, 10],
		data: [
			1, 1, 0, 1, 1,
			0, 1, 0, 0, 1,
			1, 0, 0, 1, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	"#": {
		size: [4, 10],
		data: [
			0, 0, 0, 1, 0,
			0, 1, 0, 1, 0,
			0, 1, 0, 1, 1,
			1, 1, 1, 1, 0,
			0, 1, 0, 1, 0,
			
			0, 1, 0, 1, 1,
			1, 1, 1, 1, 0,
			0, 1, 0, 1, 0,
			0, 1, 0, 1, 0,
			0, 1, 0, 0, 0
		],
	},
	"$": {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0,
			0, 1, 1, 1, 0,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 0,
			0, 1, 1, 0, 0,

			0, 0, 1, 1, 0,
			0, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			0, 1, 1, 1, 0,
			0, 0, 1, 0, 0
		],
	},
	"%": {
		size: [4, 10],
		data: [
			0, 1, 0, 0, 1,
			1, 0, 1, 0, 1,
			0, 1, 0, 1, 0,
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,
			
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 1, 0,
			1, 0, 1, 0, 1,
			1, 0, 0, 1, 0
		],
	},
	"&": {
		size: [4, 10],
		data: [
			0, 1, 1, 0, 0,
			1, 0, 0, 1, 0,
			1, 0, 0, 1, 0,
			0, 1, 1, 0, 0,
			0, 1, 0, 0, 0,

			1, 0, 1, 0, 0,
			1, 0, 1, 0, 1,
			1, 0, 0, 1, 0,
			1, 0, 0, 1, 0,
			0, 1, 1, 0, 1
		],
	},
	"'": {
		size: [4, 10],
		data: [
			0, 1, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	"(": {
		size: [4, 11],
		data: [
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		],
	},
	")": {
		size: [4, 11],
		data: [
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0,
			0, 0, 0, 1, 0,
			0, 0, 0, 1, 0,
			
			0, 0, 0, 1, 0,
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0
		],
	},
	"*": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 1, 0, 0,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			0, 1, 1, 1, 0,
			0, 0, 1, 0, 0,

			0, 1, 1, 1, 0,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			0, 0, 1, 0, 0,
		],
	},
	"+": {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			1, 1, 1, 1, 1,

			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	",": {
		size: [4, 11],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 1, 1, 0,
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0
		],
	},
	"-": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			1, 1, 1, 1, 1,

			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	".": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 1, 1, 0,
			0, 0, 1, 1, 0
		],
	},
	"/": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 1, 0,
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0
		],
	},
	"0": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,
			0, 1, 1, 1, 0,
		],
	},
	"1": {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0, 
			0, 1, 1, 0, 0, 
			1, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 1, 1, 0,
		],
	},
	"2": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			0, 0, 0, 1, 0,

			0, 0, 1, 0, 0, 
			0, 1, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			1, 1, 1, 1, 1,
		],
	},
	"3": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			0, 0, 1, 1, 0,

			0, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	"4": {
		size: [4, 10],
		data: [
			0, 0, 0, 1, 0, 
			0, 0, 1, 1, 0, 
			0, 0, 1, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0,

			1, 0, 0, 1, 0, 
			1, 0, 0, 1, 0, 
			1, 1, 1, 1, 1, 
			0, 0, 0, 1, 0, 
			0, 0, 1, 1, 1,
		],
	},
	"5": {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 1, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 1, 1, 1, 0,

			1, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	"6": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 1, 1, 1, 0,

			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	"7": {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			0, 0, 0, 1, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0,
		],
	},
	"8": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,

			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	"9": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 1,

			0, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			0, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	":": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 1, 1, 0, 
			0, 0, 1, 1, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 1, 1, 0, 
			0, 0, 1, 1, 0, 
			0, 0, 0, 0, 0,
		],
	},
	";": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 1, 1, 0,
			0, 0, 1, 1, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 1, 1, 0,
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0
		],
	},
	"<": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 1,
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0,
			1, 0, 0, 0, 0,

			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 0
		],
	},
	"=": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			1, 1, 1, 1, 1,
			0, 0, 0, 0, 0,
			
			0, 0, 0, 0, 0,
			1, 1, 1, 1, 1,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	">": {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0,
			0, 0, 0, 0, 1,

			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0,
			1, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	"?": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 1, 0,

			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 1, 0, 0
		],
	},
	"@": {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0,
			1, 0, 0, 0, 1,
			1, 0, 0, 1, 1,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,

			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			1, 0, 0, 1, 0,
			1, 0, 0, 0, 1,
			0, 1, 1, 1, 0
		],
	},
	A: {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0,

			0, 1, 0, 1, 0, 
			1, 1, 1, 1, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,
		],
	},
	B: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 0, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 1, 1, 0,

			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			1, 1, 1, 1, 0,
		],
	},
	C: {
		size: [4, 10],
		data: [
			0, 1, 1, 0, 1, 
			1, 0, 0, 1, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0,

			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	D: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 0, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1,

			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			1, 1, 1, 1, 0,
		],
	},
	E: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 1, 1, 0,

			0, 1, 0, 1, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 1, 
			1, 1, 1, 1, 1,
		],
	},
	F: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 1, 1, 0,

			0, 1, 0, 1, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			1, 1, 1, 0, 0,
		],
	},
	G: {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 1, 
			0, 1, 0, 1, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0,

			1, 0, 0, 1, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 0, 1, 1, 
			0, 0, 1, 0, 1,
		],
	},
	H: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 1, 1, 1, 1,

			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,
		],
	},
	I: {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 1, 1, 0,
		],
	},
	J: {
		size: [4, 10],
		data: [
			0, 1, 1, 1, 1, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0,

			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			1, 0, 0, 1, 0, 
			0, 1, 1, 0, 0,
		],
	},
	K: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1, 
			1, 0, 0, 1, 0, 
			1, 0, 1, 0, 0, 
			1, 0, 1, 0, 0, 
			1, 1, 0, 0, 0,

			1, 0, 1, 0, 0, 
			1, 0, 1, 0, 0, 
			1, 0, 0, 1, 0, 
			1, 0, 0, 1, 0, 
			1, 0, 0, 0, 1,
		],
	},
	L: {
		size: [4, 10],
		data: [
			1, 1, 1, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,

			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 1,
			0, 1, 0, 0, 1,
			1, 1, 1, 1, 1
		],
	},
	M: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1,
			1, 1, 0, 1, 1,
			1, 1, 0, 1, 1,
			1, 1, 0, 1, 1,
			1, 0, 1, 0, 1,

			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1
		],
	},
	N: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1,
			1, 1, 0, 0, 1,
			1, 1, 0, 0, 1,
			1, 1, 0, 0, 1,
			1, 0, 1, 0, 1,

			1, 0, 1, 0, 1,
			1, 0, 0, 1, 1,
			1, 0, 0, 1, 1,
			1, 0, 0, 1, 1,
			1, 0, 0, 0, 1
		],
	},
	O: {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0,
			0, 1, 0, 1, 0,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			0, 1, 0, 1, 0,
			0, 0, 1, 0, 0
		],
	},
	P: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 0,
			0, 1, 0, 0, 1,
			0, 1, 0, 0, 1,
			0, 1, 0, 0, 1,
			0, 1, 0, 0, 1,

			0, 1, 1, 1, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			1, 1, 1, 0, 0
		],
	},
	Q: {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0,
			0, 1, 0, 1, 0,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 1, 1, 0, 1,
			0, 1, 0, 1, 0,
			0, 0, 1, 0, 1
		],
	},
	R: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 0, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1,

			0, 1, 1, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 0, 1, 
			1, 1, 1, 0, 1,
		],
	},
	S: {
		size: [4, 10],
		data: [
			0, 1, 1, 0, 1,
			1, 0, 0, 1, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 0,
			0, 1, 1, 0, 0,

			0, 0, 0, 1, 0,
			0, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 1, 0, 0, 1,
			1, 0, 1, 1, 0
		],
	},
	T: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 1, 
			1, 0, 1, 0, 1, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 1, 1, 0,
		],
	},
	U: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			0, 1, 1, 1, 0
		],
	},
	V: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			0, 1, 0, 1, 0,

			0, 1, 0, 1, 0,
			0, 1, 0, 1, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0
		],
	},
	W: {
		size: [4, 10],
		data: [
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,

			1, 0, 1, 0, 1,
			1, 0, 1, 0, 1,
			0, 1, 0, 1, 0,
			0, 1, 0, 1, 0,
			0, 1, 0, 1, 0
		],
	},
	X: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,
		],
	},
	Y: {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			1, 0, 0, 0, 1,
			0, 1, 0, 1, 0,
			0, 1, 0, 1, 0,

			0, 1, 0, 1, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 1, 1, 1, 0
		],
	},
	Z: {
		size: [4, 10],
		data: [
			1, 1, 1, 1, 1, 
			1, 0, 0, 0, 1, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			1, 1, 1, 1, 1,
		],
	},
	"[": {
		size: [4, 11],
		data: [
			1, 1, 1, 1, 1,
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,

			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,
			1, 1, 1, 1, 1
		],
	},
	"\\": {
		size: [4, 10],
		data: [
			1, 0, 0, 0, 0,
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0,
			0, 0, 0, 1, 0,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1
		],
	},
	"]": {
		size: [4, 11],
		data: [
			1, 1, 1, 1, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,

			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			0, 0, 0, 0, 1,
			1, 1, 1, 1, 1
		],
	},
	"^": {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0,
			0, 1, 0, 1, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	"_": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			1, 1, 1, 1, 1
		],
	},
	"`": {
		size: [4, 10],
		data: [
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,

			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	},
	a: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1,

			0, 0, 1, 1, 1, 
			0, 1, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 1, 1, 
			0, 1, 1, 0, 1,
		],
	},
	b: {
		size: [4, 10],
		data: [
			1, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 1, 0, 1,

			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 1, 0, 1, 
			0, 1, 0, 1, 0,
		],
	},
	c: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	d: {
		size: [4, 10],
		data: [
			0, 0, 1, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			1, 0, 1, 1, 0,

			1, 0, 0, 1, 0, 
			1, 0, 0, 1, 0, 
			1, 0, 0, 1, 0, 
			1, 0, 1, 1, 0, 
			0, 1, 0, 1, 1,
		],
	},
	e: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 1, 
			1, 1, 1, 1, 1, 
			1, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	f: {
		size: [4, 10],
		data: [
			0, 0, 0, 1, 0, 
			0, 0, 1, 0, 1, 
			0, 0, 1, 0, 0, 
			0, 1, 1, 1, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 1, 1, 0,
		],
	},
	g: {
		size: [4, 11],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 1, 0, 1, 
			1, 0, 0, 1, 1,

			1, 0, 0, 0, 1, 
			1, 0, 0, 1, 1, 
			0, 1, 1, 0, 1, 
			0, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,
			0, 1, 1, 1, 0,
		],
	},
	h: {
		size: [4, 10],
		data: [
			1, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 1, 0, 1,

			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			1, 1, 1, 0, 1,
		],
	},
	i: {
		size: [4, 10],
		data: [
			0, 0, 1, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 1, 0, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 1, 1, 0,
		],
	},
	j: {
		size: [4, 11],
		data: [
			0, 0, 0, 1, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 1, 1, 0, 
			0, 0, 0, 1, 0,

			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			0, 0, 0, 1, 0, 
			1, 0, 0, 1, 0,
			0, 1, 1, 0, 0,
		],
	},
	k: {
		size: [4, 10],
		data: [
			1, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 1, 1, 
			0, 1, 0, 0, 1,

			0, 1, 0, 1, 0, 
			0, 1, 1, 0, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			1, 1, 0, 1, 1,
		],
	},
	l: {
		size: [4, 10],
		data: [
			0, 1, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 1, 1, 0,
		],
	},
	m: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 0, 1, 1, 0, 
			1, 1, 1, 1, 1,

			1, 0, 1, 0, 1, 
			1, 0, 1, 0, 1, 
			1, 0, 1, 0, 1, 
			1, 0, 1, 0, 1, 
			1, 0, 1, 0, 1,
		],
	},
	n: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 0, 1, 1, 0, 
			1, 1, 0, 0, 1,

			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,
		],
	},
	o: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	p: {
		size: [4, 11],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 1, 0, 1, 0, 
			0, 1, 1, 0, 1,

			0, 1, 0, 0, 1, 
			0, 1, 0, 0, 1, 
			0, 1, 1, 0, 1, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 0, 0,
			1, 1, 1, 0, 0,
		],
	},
	q: {
		size: [4, 11],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 0, 1, 0, 
			1, 0, 1, 1, 0,

			1, 0, 0, 1, 0, 
			1, 0, 0, 1, 0, 
			1, 0, 1, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 0, 0, 1, 0,
			0, 0, 1, 1, 1,
		],
	},
	r: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 1, 0, 1, 1, 
			0, 1, 1, 0, 0,

			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			0, 1, 0, 0, 0, 
			1, 1, 1, 0, 0,
		],
	},
	s: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 1, 1, 1, 0, 
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 0, 
			0, 1, 1, 1, 0, 
			0, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			0, 1, 1, 1, 0,
		],
	},
	t: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			1, 1, 1, 1, 1, 
			0, 0, 1, 0, 0,

			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 1, 
			0, 0, 1, 0, 1, 
			0, 0, 0, 1, 1,
		],
	},
	u: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 1, 1, 
			0, 1, 1, 0, 1,
		],
	},
	v: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,

			1, 0, 0, 0, 1, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0,
		],
	},
	w: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 0, 1, 0, 1, 
			1, 0, 1, 0, 1,

			1, 0, 1, 0, 1, 
			1, 0, 1, 0, 1, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0,
		],
	},
	x: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,

			0, 1, 0, 1, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 0, 1, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,
		],
	},
	y: {
		size: [4, 11],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			1, 0, 0, 0, 1,

			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 1, 0, 1, 0, 
			0, 0, 1, 0, 0, 
			1, 0, 1, 0, 0,
			1, 1, 0, 0, 0,
		],
	},
	z: {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			1, 1, 1, 1, 1, 
			1, 0, 0, 0, 1,

			0, 0, 0, 1, 0, 
			0, 0, 1, 0, 0, 
			0, 1, 0, 0, 0, 
			1, 0, 0, 0, 1, 
			1, 1, 1, 1, 1,
		],
	},
	"{": {
		size: [4, 11],
		data: [
			0, 0, 0, 1, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0,

			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		],
	},
	"|": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0, 
			0, 0, 0, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0,

			0, 0, 0, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 1, 0, 0, 
			0, 0, 0, 0, 0,
		],
	},
	"}": {
		size: [4, 11],
		data: [
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0,

			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 1, 0, 0,
			0, 1, 0, 0, 0
		],
	},
	"~": {
		size: [4, 10],
		data: [
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			1, 0, 1, 0, 1,

			0, 0, 0, 1, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0,
			0, 0, 0, 0, 0
		],
	}
};
