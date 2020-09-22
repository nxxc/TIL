function solution(N) {
  const bi = N.toString(2);
  let max = 0;
  let count = 0;
  for (let i = 0; i < bi.length; i++) {
    if (bi[i] === '0') count++;
    if (bi[i] === '1') {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  return max;
}
