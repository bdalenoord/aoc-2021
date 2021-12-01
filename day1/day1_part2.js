const fs = require('fs');
const readline = require('readline');

const lineReader = readline.createInterface({
    input: fs.createReadStream('input.txt')
});

let lines = []; // Keep track of four lines, which is enough for two sliding windows at a time.
let increaseCounter = 0; // Number of increases in input, which is the desired output
lineReader.on('line', (line) => {
    let lineAsNumber = parseInt(line);
    lines.push(lineAsNumber);

    if (lines.length === 4) { // Make sure not to start processing too early
        let sumOne = 0;
        let sumTwo = 0;

        // Calculate the two sliding windows in the current chunk
        for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            if (lineIndex === 0) {
                sumOne += lines[lineIndex];
            } else if (lineIndex === lines.length - 1) {
                sumTwo += lines[lineIndex];
            } else {
                sumOne += lines[lineIndex];
                sumTwo += lines[lineIndex];
            }
        }

        if (sumTwo > sumOne) {
            console.log(`${sumTwo} is greater than ${sumOne}\t\tincreased`);
            increaseCounter++;
        } else {
            console.log(`${sumTwo} is smaller/equal than ${sumOne}\tnot increased`);
        }

        lines.shift(); // Remove the first line
    }
});

lineReader.on('close', () => {
    console.log(`Total number of increases: ${increaseCounter}`);
});