function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = [];
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        const a = A[i];
        const b = A[j];
        const c = A[k];
        if (a > b + c && b > a + c && c > a + b) {
          arr.push([i, j, k]);
        }
      }
    }
  }
  console.log(arr);
  return arr.length ? 1 : 0;
}

solution([10, 2, 5, 1, 8, 20]);
