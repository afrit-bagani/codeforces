const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let counter = 0;
let words = [];

readline.on("line", (line) => {
    if (n === 0) {
        n = Number(line.trim());
    } else {
        words.push(line.trim().toLowerCase());
        counter++;
    }

    if (counter === n) {
        words.forEach((word) => {
            if (word.length > 10) {
                console.log(
                    `${word[0]}${word.length - 2}${word[word.length - 1]}`
                );
            } else {
                console.log(word);
            }
        });
        readline.close();
    }
});
