const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (a) => {
  readline.on("line", (b) => {
    // Convert both strings to lowercase
    a = a.toLowerCase();
    b = b.toLowerCase();

    // Compare the strings
    if (a === b) {
      console.log(0);
    } else if (a < b) {
      console.log(-1);
    } else {
      console.log(1);
    }

    readline.close();
  });
});
