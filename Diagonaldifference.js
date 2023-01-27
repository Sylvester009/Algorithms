function diagonalDifference(arr) {
    // Write your code here
const length = arr.length;
  let left = 0,
    right = 0;

  for (let i = 0; i < length; i++) {
    left += arr[i][i];
    right += arr[length - 1 - i][i]
  }

  console.log(Math.abs(left - right));

  return Math.abs(left - right);
}