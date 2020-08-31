function solution(dartResult) {
  const numList = dartResult
    .split(/[a-z]/i)
    .map((v) => v.replace(/[^0-9]/, ''))
    .filter((v) => v !== '')
    .map((v) => parseInt(v));
  const other = dartResult.split(/[0-9]/).filter((v) => v !== '');
  const bonus = { S: 1, D: 2, T: 3 };
  const opt = { '*': 2, '#': -1 };
  for (let i = 0; i < numList.length; i++) {
    const orders = [...other[i]];
    orders.forEach((order) => {
      if (bonus[order]) numList[i] = Math.pow(numList[i], bonus[order]);
      if (opt[order]) {
        if (order === '*') {
          if (i === 0) numList[i] = 2 * numList[i];
          else {
            numList[i] = 2 * numList[i];
            numList[i - 1] = 2 * numList[i - 1];
          }
        } else if (order === '#') {
          numList[i] = -numList[i];
        }
      }
    });
  }

  return numList.reduce((a, c) => a + c);
}
