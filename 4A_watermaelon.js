const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const weight = Number(line.trim());

  if (weight % 2 === 0 && weight >= 4) {
    console.log("YES");
  } else {
    console.log("NO");
  }

  rl.close();
});
