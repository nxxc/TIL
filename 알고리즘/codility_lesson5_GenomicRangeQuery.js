function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  const res = [];
  for (let i = 0; i < P.length; i++) {
    const arr = S.slice(P[i], Q[i + 1]);
    for (let j = 0; j < arr.length; j++) {
      if (arr.includes('A')) {
        res.push(1);
        break;
      }
      if (arr.includes('C')) {
        res.push(2);
        break;
      }
      if (arr.includes('G')) {
        res.push(3);
        break;
      }
      if (arr.includes('T')) {
        res.push(4);
        break;
      }
    }
  }
  return res;
}
