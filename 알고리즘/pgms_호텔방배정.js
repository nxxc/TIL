function solution(k, room_number) {
  if (room_number.length === 1) {
    return room_number;
  }
  let list = Array(k).fill(true);
  let answer = [];
  function findRoom(number) {
    if (list[number]) {
      list[number] = false;
      answer.push(number);
    } else {
      findRoom(number + 1);
    }
  }

  room_number.forEach((number) => {
    findRoom(number);
  });
  return answer;
}

// 정확성 통과
// 효율성 탈락
