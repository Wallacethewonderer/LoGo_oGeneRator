const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG.js');

const infoCollect = [
    {
        name: 'text',
        message: 'Please enter one to three characters to be displayed on the SVG',
        type: 'input'
    },
    {
        name: 'text_color',
        message: 'Please enter a color keyword or hexadeciaml number for the text color',
        type: 'input'
    },
    {   
        name: 'shape',
        message: 'please select a shape for the SVG:',
        type: 'list',
        choices: ['circle', 'triangle', 'square']
    },
    {
        name: 'shape_color',
        message: 'Please enter a color keyword or hexadeciaml number for the color of the shape',
        type: 'input'
    }
];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            throw err;
        }
        console.log('Generated logo.svg!');
    });
}

function init() {
    inquirer.prompt(infoCollect)
    .then((data) => {
        const svg = generateSVG(data);
        writeToFile('./logo.svg', svg);
    });
}

init();