const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arr = [];
let count = 0;
let position = [-1, -1];
let middle = [3, 3];

readline.on("line", (input) => {
  const numbers = input.trim().split(" ").map(Number);
  arr.push(numbers);
  count++;

  if (count === 5) {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i][j] === 1) {
          position = [i + 1, j + 1];
        }
      }
    }
    console.log(
      Math.abs(middle[0] - position[0]) + Math.abs(middle[1] - position[1])
    );
    readline.close();
  }
});
