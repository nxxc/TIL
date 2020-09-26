//v1

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

  return arr.length ? 1 : 0;
}

//v2

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] > A[i + 2] - A[i + 1]) return 1;
  }
  return 0;
}

//정렬해서 연속한 3개의 원소만 비교
// 정렬을 하면 아래의 조건은 항상 참, 따러서 한가지 조건만 확인하면 됨
// A[R] + A[P] > A[Q] (첫번째, 마지막 합은 중간보다 항상 큼)
// A[Q] + A[R] > A[P] (중간, 마지막 합은 첫번째보다 항상 큼)
