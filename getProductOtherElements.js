// input [1,2,3,4,5] => output [120,60,40,30,24]

const inputArr = process.argv.slice(2);

const input = inputArr.map((num) => parseInt(num));

const prod = input.reduce((acc, num) => acc * num);

const output = input.map((num) => prod / num);

console.log("input", input);
console.log("result", output);

const prefix_products = [];
input.map((num, index) => {
  if (prefix_products.length > 0)
    prefix_products.push(prefix_products[index - 1] * num);
  else prefix_products.push(num);
});

let suffix_products = [];
input.reverse().map((num, index) => {
  if (suffix_products.length > 0)
    suffix_products.push(suffix_products[index - 1] * num);
  else suffix_products.push(num);
});
suffix_products = suffix_products.reverse();

const result = [];
input.map((num, i) => {
  if (i === 0) result.push(suffix_products[i + 1]);
  else if (i === input.length - 1) result.push(prefix_products[i - 1]);
  else result.push(prefix_products[i - 1] * suffix_products[i + 1]);
});

console.log("result", result);
