function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sorted = A.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (i + 1 !== sorted[i]) return 0;
  }
  return 1;
}
