function solution(tickets) {
  var answer = [];
  let used = Array.from(tickets, () => false);
  tickets.sort();
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i][0] === 'ICN') {
      used[i] = true;
      search(tickets[i], used, []);
      used[i] = false;
    }
  }
  function search(start, check, route) {
    route.push(start[0]);
    if (check.every((v) => v === true)) {
      route.push(start[1]);
      answer.push(route);
      return;
    }
    tickets.forEach((ticket, i) => {
      if (ticket[0] === start[1] && !check[i]) {
        const newCheck = Array.from(check);
        const newArr = Array.from(route);
        newCheck[i] = true;
        search(ticket, newCheck, newArr);
      }
    });
  }
  return answer[0];
}

// 1. 티켓 돌면서 인천출발이면 search 시작 (다른 출발점도 있을 수 있으니 used[i] = false; 로 다음포문에선 초기화)
// 2. search함수 => 모든 티켓이 사용됐으면 route 배열을 경로화 해서 answer에 저장
// 3. 티켓들 돌면서 다음 목적지로 가능하고 사용하지 않은 (ticket[0] === start[1] && !check[i]) 티켓들로 다시 search 재귀실행
