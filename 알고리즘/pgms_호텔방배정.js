const k = 10;
const room_number = [1, 3, 4, 1, 3, 1];

// v1
// 정확성 통과
// 효율성 탈락

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

// v2
// Map 사용
// 정확성 통과
// 효율성 탈락

function solution2(k, room_number) {
  if (room_number.length === 1) {
    return room_number;
  }
  let room = new Map();
  function find(number, room) {
    if (!room.has(number)) {
      room.set(number, '방배정');
    } else {
      find(number + 1, room);
    }
  }
  room_number.forEach((number) => {
    find(number, room);
  });
  console.log(room);
  return [...room].map((v) => v[0]);
}

// v3
// findRoom 함수만 변경했는데 효율성 통과
// 왜 그런지는 더 공부해야할듯...

function solution3(k, room_number) {
  if (room_number.length === 1) {
    return room_number;
  }
  let room = new Map();
  function findRoom(number, rooms) {
    if (!rooms.has(number)) {
      rooms.set(number, number + 1);
      return number;
    }
    let p = findRoom(rooms.get(number), rooms);
    rooms.set(number, p + 1);
    return p;
  }
  room_number.forEach((number) => {
    findRoom(number, room);
  });
  console.log(room);
  return [...room].map((v) => v[0]);
}
