function solution(numbers, hand) {
  let answer = '';
  let left = [3, 0];
  let right = [3, 2];
  const leftCoords = [1, 4, 7];
  const rightCoords = [3, 6, 9];
  const coords = [
    [3, 1], // 0
    [0, 0], // 1
    [0, 1], // 2
    [0, 2], // 3
    [1, 0], // 4
    [1, 1], // 5
    [1, 2], // 6
    [2, 0], // 7
    [2, 1], // 8
    [2, 2], // 9
  ];

  function distance(currentLeft, currentRight, nextCoords, direction) {
    const [leftX, lefY] = currentLeft;
    const [rightX, rightY] = currentRight;
    const [nextX, nextY] = nextCoords;
    const distanceL = Math.abs(leftX - nextX) + Math.abs(lefY - nextY);
    const distanceR = Math.abs(rightX - nextX) + Math.abs(rightY - nextY);
    if (distanceL === distanceR) {
      if (direction === 'left') {
        left = nextCoords;
        answer += 'L';
      } else if (direction === 'right') {
        right = nextCoords;
        answer += 'R';
      }
    } else if (distanceL < distanceR) {
      left = nextCoords;
      answer += 'L';
    } else if (distanceL > distanceR) {
      right = nextCoords;
      answer += 'R';
    }
  }
  numbers.forEach((number) => {
    const nextCoords = coords[number];
    if (leftCoords.includes(number)) {
      left = nextCoords;
      answer += 'L';
    } else if (rightCoords.includes(number)) {
      right = nextCoords;
      answer += 'R';
    } else {
      distance(left, right, nextCoords, hand);
    }
  });
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'left');
