const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.on("line", (line) => {
    const [n, m, a] = line.trim().split(/\s+/).map(Number);

    let horizontal = Math.ceil(n / a);
    let vertical = Math.ceil(m / a);
    let totalFlagstones = horizontal * vertical;
    console.log(totalFlagstones);
    readline.close();
});
