const fibNum = process.argv[2] || 5;

const fibArr = [];

const addNums = (index, prev, curr) => {
  index--;
  fibArr.push(prev);
  if (index > 1) {
    return addNums(index, curr, curr + prev);
  }
  fibArr.push(curr);
  return curr;
};

const finalNum = addNums(fibNum, 0, 1);
console.log(fibArr);
console.log(finalNum);
