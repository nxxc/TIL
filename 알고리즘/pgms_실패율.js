function solution(N, stages) {
  let data = new Map();
  if (stages.legnth === 1) {
    return stages;
  }
  for (let stage = 1; stage <= N; stage++) {
    let top = stages.filter((v) => v === stage).length;
    let bottom = stages.filter((v) => v >= stage).length;
    let fail = top / bottom;
    data.set(stage, bottom === 0 ? 0 : fail);
  }
  var answer = [...data]
    .sort((a, b) => {
      if (b.ratio === a.ratio) {
        return a.index - b.index;
      } else {
        return b.ratio - a.ratio;
      }
    })
    .map((v) => v[0]);
  return answer;
}
