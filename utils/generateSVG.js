function generateSVG(data) {
    const { text, text_color, shape, shape_color } = data;
    let shapeSVG = '';

    switch (shape) {
        case 'circle':
            shapeSVG = `<circle cx="150" cy="100" r="80" fill="${shape_color}" />`;
            break;
        case 'triangle':
            shapeSVG = `<polygon points="25,150 150,5 275,150" fill="${shape_color}" />`;
            break;
        case 'square':
            shapeSVG = `<rect x="50" y="30" width="200" height="150" fill="${shape_color}" />`;
            break;
    }

    const svg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>
    `;

    return svg;
}

module.exports = generateSVG;