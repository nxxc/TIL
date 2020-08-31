function solution(record) {
  const user = new Map();
  const answer = [];
  record.forEach((v) => {
    const order = v.split(' ');
    if (order[0] === 'Enter' || order[0] === 'Change') {
      user.set(order[1], order[2]);
    }
  });
  record.forEach((v) => {
    const [action, uid] = v.split(' ');
    if (action === 'Enter') {
      answer.push(`${user.get(uid)}님이 들어왔습니다.`);
    }
    if (action === 'Leave') {
      answer.push(`${user.get(uid)}님이 나갔습니다.`);
    }
  });
  return 0;
}
