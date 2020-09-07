function solution(tickets) {
  let answer = [];
  let startICN = tickets.filter((ticket) => ticket[0] === 'ICN');
  let count = 0;
  function recurr(start, visited) {
    count++;
    visited.push(start);

    let tempPath = Array.from(visited);

    if (tempPath.length === tickets.length) {
      answer.push(tempPath);
      return;
    }

    const nextList = tickets.filter(
      (ticket) => !tempPath.includes(ticket) && ticket[0] === start[1]
    );

    nextList.forEach((next) => recurr(next, tempPath));
  }
  startICN.forEach((icn) => recurr(icn, []));
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
