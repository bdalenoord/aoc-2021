const fs = require('fs');
const readline = require('readline');

const lineReader = readline.createInterface({
    input: fs.createReadStream('input.txt')
});

let previousLine = undefined;
let increaseCounter = 0; // Number of increases in input, which is the desired output
lineReader.on('line', (line) => {
    let increase = 0;
    let lineAsNumber = parseInt(line);
    if (previousLine) {
        if (lineAsNumber > previousLine) {
            increase = 1;
        }
    } else {
        increase = -1; // Handle first line so we can print a specific message, not really required but it matches the description.
    }

    increaseCounter += (increase > 0) ? increase : 0;
    console.log(`${line} (${(increase < 0) ? "N/A - no previous measurement" : (increase > 0) ? "increased" : "decreased"})`);
    previousLine = lineAsNumber;
});

lineReader.on('close', () => {
    console.log(`Total number of increases: ${increaseCounter}`);
});