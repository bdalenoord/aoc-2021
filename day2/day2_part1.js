const fs = require('fs');
const readline = require('readline');

const lineReader = readline.createInterface({
    input: fs.createReadStream('input.txt')
});

let horizontal_position = 0;
let depth = 0;

lineReader.on('line', (line) => {
    let [_, command, amount] = line.match(/^(down|up|forward) ([0-9]*)$/)

    let amountAsNumber = parseInt(amount)

    switch(command) {
        case 'down':
            depth += amountAsNumber
            break;
        case 'up':
            depth -= amountAsNumber
            break;
        case 'forward':
            horizontal_position += amountAsNumber
            break;
        default:
            console.log(`Unrecognized command '${command}'`)
    }
});

lineReader.on('close', () => {
    console.log(`Current horizontal position: ${horizontal_position}`)
    console.log(`Current depth: ${depth}`)
    console.log(`Answer: ${horizontal_position * depth}`)
});