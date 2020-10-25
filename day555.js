/*
An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time. 
If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

You can assume all the integers in the array are unique.
*/

const log = console.log;

const sorted = [10, 13, 18, 25, 2, 8];
const searchNum = 8;
const length = sorted.length - 1;

const findPivot = (arr, low, high) => {
  if (low > high) return null;
  if (low === high) return low;

  const mid = Math.floor((low + high) / 2);
  log(`mid ${mid} arr[mid - 1] ${arr[mid - 1]}  arr[mid + 1] ${arr[mid + 1]}`);

  if (mid < high && arr[mid] > arr[mid + 1]) return mid;
  else if (mid > low && arr[mid] < arr[mid - 1]) return mid - 1;
  else if (arr[low] >= arr[mid]) return findPivot(arr, low, mid - 1);
  else return findPivot(arr, mid + 1, high);
};

const binarySearch = (arr, key, low, high) => {
  if (low > high) return null;

  const mid = Math.floor((low + high) / 2);
  log(`mid ${mid} low ${low}  high ${high}`);

  if (arr[mid] === key) return mid;
  else if (arr[mid] > key) return binarySearch(arr, key, low, mid - 1);
  else return binarySearch(arr, key, mid + 1, high);
};

const pivot = findPivot(sorted, 0, length);
log(`pivot = ${pivot}`);

let res;

if (pivot === null) res = binarySearch(sorted, searchNum, 0, length);
else if (sorted[pivot] === searchNum) res = pivot;
else if (sorted[0] <= searchNum)
  res = binarySearch(sorted, searchNum, 0, pivot - 1);
else res = binarySearch(sorted, searchNum, pivot + 1, length);

log(res);
