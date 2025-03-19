const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.on("line", (line) => {
  const [m, n] = line.split(" ").map(Number);
  console.log(Math.floor((m * n) / 2));
  readline.close();
});
