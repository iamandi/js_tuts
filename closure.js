function accumulator() {
  let sum = 0;

  function add() {
    return sum++;
  }

  return add;
}

const acc = accumulator();

console.log(acc());
console.log(acc());
console.log(acc());
console.log(acc());
console.log(acc());
