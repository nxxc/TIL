function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const arr = A.map((v, i) => [i - v, i + v]).sort((a, b) => a[0] - b[0]);
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    const [currLeft, currRight] = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const [left, right] = arr[j];
      if (count > 10000000) return -1;
      if (left > currRight) break;
      if (left >= currLeft && left <= currRight) count++;
    }
  }
  return count;
}

// 좌표로 표현한뒤
// 시작점 순서대로 정렬
// 하나씩 비교하면서 겹치면 count ++
// 조건은 비교하는 원의 시작점이 기준 원의 시작점과 끝점 사이에 포함되면 ++
