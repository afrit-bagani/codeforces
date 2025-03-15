const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let n = 0;
let counter = 0;
let integerArr = [];
let solutionNo = 0;

readline.on("line", (line) => {
    if (n === 0) {
        n = Number(line.trim());
    } else {
        integerArr.push(line.trim());
        counter++;
    }
    if (counter === n) {
        integerArr.forEach((integer) => {
            let totalNoOf1 = 0;
            for (let singleInteger of integer) {
                if (singleInteger == 1) {
                    totalNoOf1++;
                }
            }
            if (totalNoOf1 >= 2) {
                solutionNo++;
            }
        });

        readline.close();

        console.log(solutionNo);
    }
});
