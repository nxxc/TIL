function solution(n, t, m, p) {
  var answer = '';
  let temp = '';
  const converter = (number, base) => number.toString(base);

  for (let i = 0; i <= t * m; i++) {
    if (temp.length > t * m) break;
    temp += converter(i, n);
  }
  let newtemp = temp.slice(0, t * m);
  answer = [...newtemp]
    .filter((_, i) => i % m === p - 1)
    .map((v) => v.toUpperCase())
    .join('');
  return answer;
}
