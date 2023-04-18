const generateSVG = require('./generateSVG');

describe('generateSVG', () => {
  test('generates a circle svg', () => {
    const data = {
      text: 'WYL',
      text_color: 'white',
      shape: 'circle',
      shape_color: 'green'
    };
    const svg = generateSVG(data);
    const expectedSVG = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">WYL</text>
    </svg>
    `;
    expect(svg).toEqual(expectedSVG);
  });

  test('generates a square svg', () => {
    const data = {
      text: 'YHL',
      text_color: 'gold',
      shape: 'square',
      shape_color: 'black'
    };
    const svg = generateSVG(data);
    const expectedSVG = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="30" width="200" height="150" fill="black" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="gold">YHL</text>
    </svg>
    `;
    expect(svg).toEqual(expectedSVG);
  });

  test('generates a triangle svg', () => {
    const data = {
      text: 'SVG',
      text_color: 'red',
      shape: 'triangle',
      shape_color: 'blue'
    };
    const svg = generateSVG(data);
    const expectedSVG = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="25,150 150,5 275,150" fill="blue" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>
    </svg>
    `;
    expect(svg).toEqual(expectedSVG);
  });
});