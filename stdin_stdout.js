process.stdin.on("data", processLine);

function processLine(line) {
  process.stdout.write(line);
}
