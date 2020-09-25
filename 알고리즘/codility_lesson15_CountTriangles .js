function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  let count = 0;
  for (let left = 0; left < A.length - 2; left++) {
    let right = left + 2;
    for (let middle = left + 1; middle < A.length - 1; middle++) {
      while (right < A.length && A[left] + A[middle] > A[right]) {
        right += 1;
      }
      count += right - middle - 1;
    }
  }
  return count;
}
