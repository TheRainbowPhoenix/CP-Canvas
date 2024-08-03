document.addEventListener('paste', (event) => {
    const clipboardItems = event.clipboardData.items;
    for (const item of clipboardItems) {
        if (item.type.startsWith('image/')) {
            const blob = item.getAsFile();
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.getElementById('canvas');
                    const ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                    ctx.drawImage(img, 0, 0, img.width, img.height);

                    const imageData = ctx.getImageData(0, 0, img.width, img.height);
                    const data = imageData.data;
                    let matrix = [];
                    for (let y = 0; y < img.height; y++) {
                        let row = [];
                        for (let x = 0; x < img.width; x++) {
                            const index = (y * img.width + x) * 4;
                            const r = data[index]; // Red channel
                            // Determine the value (0 for white, 1 for red)
                            const value = r == 90 ? 1 : r == 231 ? 2 : 0;
                            row.push(value);
                        }
                        matrix.push(row);
                    }

                    // Print the matrix in the desired format
                    let matrixString = matrix.map(row => row.join(', ')).join(',\n');
                    console.log(matrixString);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(blob);
        }
    }
});
