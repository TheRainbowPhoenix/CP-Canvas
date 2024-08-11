const dlg_font_list = {
    "charmap": "!#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}~0123456789_éàù€_↺_⚙️_",
    "charWidths": [
        4, 9, 8, 11, 9, 4, 7, 7, 8, 8, 5, 8, 5, 7,
        // 0123456789 ...
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 4, 9, 8, 9, 7, 12,
        // ABCDEF ...
        8, 8, 8, 8, 7, 7, 8, 8, 4, 7, 8, 7, 10, 8, 8, 8, 8, 8, 8, 8, 8, 8, 12, 9, 10, 7, 6, 6, 9, 8,
        // abcdef ...
        7, 7, 7, 7, 7, 6, 7, 7, 4, 5, 7, 4, 10, 7, 8, 7, 7, 6, 7, 6, 7, 7, 10, 7, 7, 6, 7, 4, 7, 11,
        // 0123456789' '
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 4, 5, 7, 7, 7, 9, 8, 22, 8, 21, 8
    ]
}

const charmap = dlg_font_list.charmap.split("");
const charWidths = dlg_font_list.charWidths;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'dialog_font_list.png'; // Ensure this path is correct

img.onload = () => {
    ctx.drawImage(img, 0, 0);

    const ui_char_map = {};
    let x = 0;
    for (let i = 0; i < charmap.length; i++) {
        const char = charmap[i];
        const width = charWidths[i];

        // Extract the character's pixel data
        const imageData = ctx.getImageData(x, 0, width, 18);
        const data = imageData.data;

        // Convert to 0 and 1 format based on the red channel
        let charData = [];
        for (let y = 0; y < 18; y++) {
            let row = [];
            for (let xx = 0; xx < width; xx++) {
                const index = (y * width + xx) * 4;
                const r = data[index];

                const value = r == 90 ? 1 : r == 231 ? 2 : 0;

                row.push(value);
            }
            charData = charData.concat(row);
        }

        // Add the character data to the output object
        ui_char_map[char] = {
            size: [width, 18],
            data: charData
        };

        // Move to the next character position, considering the 1px space
        x += width + 1;
    }

    // Print the resulting JSON object to the console
    console.log(JSON.stringify(ui_char_map, null, 2));
};