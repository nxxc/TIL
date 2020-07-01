function solution(s) {
  let answer = [];

  // 문자열 정리하기
  s = s.replace(/{+/g, '').replace(/}+/g, '').split(',');

  // 원소가 하나면 그대로 리턴
  if (s.length === 1) {
    return [parseInt(s[0])];
  }

  // Map이용해서 count
  let ma = new Map();

  s.forEach((s) => {
    ma.has(s) ? ma.set(s, ma.get(s) + 1) : ma.set(s, 1);
  });

  //   s.forEach(s=> {ma.has(s)? ma.set(s,ma.get(s)+1) : ma.set(s,1)})

  [...ma] // Map object를 배열로
    .sort((a, b) => b[1] - a[1]) // 갯수 기준으로 정렬
    .forEach((v) => answer.push(parseInt(v[0]))); // 갯수 많은 순으로 answer에 push

  return answer;
}
