function solution(priorities, location) {
  var answer = 0;
  let data = priorities.map((v, i) => [parseInt(v), parseInt(i)]);

  while (1) {
    let max = priorities.sort((a, b) => b - a)[answer];
    let temp = data[0];

    if (temp[0] !== max) {
      let a = data.shift();
      data.push(a);
    }

    if (temp[0] === max) {
      data.shift();
      answer++;
    }

    if (temp[0] === max && temp[1] === location) break;
  }

  return answer;
}
