//v1

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      arr.push(count);
      count = 0;
    }
    if (A[i] === 1) {
      count++;
    }
    if (i === A.length - 1 && A[i] !== 0) {
      arr.push(count);
    }
  }
  const sum = arr.map((v, i) => v * i).reduce((a, b) => a + b);

  return sum > 1000000000 ? -1 : sum;
}

//v2
function solution(A) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      count++;
    } else {
      sum += count;
      if (sum > 1000000000) return -1;
    }
  }
  return sum;
}
