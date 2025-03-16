const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let X = 0;
let inputLine = 0;
let counter = 0;
let statementArr = [];
readline.on("line", (line) => {
    if (inputLine === 0) {
        inputLine = Number(line.trim());
    } else {
        statementArr.push(line.trim());
        counter++;
    }

    if (counter === inputLine) {
        statementArr.forEach((statement) => {
            eval(statement);
        });
        readline.close();
        console.log(X);
    }
});
