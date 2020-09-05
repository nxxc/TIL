function solution(tickets) {
  let answer = [];
  let count = 0;
  let startICN = tickets.filter((ticket) => ticket[0] === 'ICN');

  function reccr(start, visited) {
    visited.push(start);

    let tempPath = Array.from(visited);

    if (tempPath.length === tickets.length) {
      answer.push(tempPath);
      return;
    }

    const nextList = tickets.filter(
      (ticket) => !tempPath.includes(ticket) && ticket[0] === start[1]
    );

    nextList.forEach((next) => reccr(next, tempPath));
  }
  startICN.forEach((icn) => reccr(icn, []));
  answer.sort();
  let res = [];
  answer[0].forEach((v, i) => {
    if (i === tickets.length - 1) {
      res.push(v[0]);
      res.push(v[1]);
    } else {
      res.push(v[0]);
    }
  });
  return res;
}
