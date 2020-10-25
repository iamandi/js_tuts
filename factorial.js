const num = parseInt(process.argv[2]);

const factorial = (num) => {
  if (num < 0) throw new TypeError("Negative numbers are not allowed.");
  if (num === 0) return 1;

  return num * factorial(num - 1);
};

console.log(`${num}! = ${factorial(num)}`);
