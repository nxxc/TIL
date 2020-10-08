const getParent = (parent, node) => {
  if (parent[node] === node) return node;
  return getParent(parent, parent[node]);
};
const unionNodes = (parent, nodeA, nodeB) => {
  const aParent = getParent(parent, nodeA);
  const bParent = getParent(parent, nodeB);
  if (aParent < bParent) {
    parent[bParent] = aParent;
  } else {
    parent[aParent] = bParent;
  }
};
const checkCycle = (parent, firstNode, secondNode) => {
  return getParent(parent, firstNode) === getParent(parent, secondNode) ? 1 : 0;
};

function solution(land, height) {
  var answer = 0;
  const check = Array.from(Array(land.length), () =>
    Array(land.length).fill(0)
  );
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  let count = 1;

  const q = [];
  function bfs(start) {
    q.push(start);
    check[start[0]][start[1]] = count;
    while (q.length) {
      const [currY, currX] = q.shift();
      for (let i = 0; i < 4; i++) {
        const [nextY, nextX] = [currY + dy[i], currX + dx[i]];
        if (
          nextX < 0 ||
          nextY < 0 ||
          nextX >= land.length ||
          nextY >= land.length
        )
          continue;
        if (check[nextY][nextX] > 0) continue;
        if (Math.abs(land[currY][currX] - land[nextY][nextX]) > height)
          continue;
        q.push([nextY, nextX]);
        check[nextY][nextX] = count;
      }
    }
    count++;
  }
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (check[y][x] === 0) {
        bfs([y, x]);
      }
    }
  }
  const dist = Array.from(Array(count), () => Array(count).fill(10000));
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      for (let i = 0; i < 4; i++) {
        const [nextY, nextX] = [y + dy[i], x + dx[i]];
        if (
          nextX < 0 ||
          nextY < 0 ||
          nextX >= land.length ||
          nextY >= land.length
        )
          continue;
        const [start, end] = [check[y][x], check[nextY][nextX]];
        const absDist = Math.abs(land[y][x] - land[nextY][nextX]);
        if (start !== end) {
          const min = dist[start][end] > absDist ? absDist : dist[start][end];
          dist[start][end] = min;
          dist[end][start] = min;
        }
      }
    }
  }
  const costs = [];
  for (let i = 1; i < dist.length; i++) {
    for (let j = i + 1; j < dist.length; j++) {
      costs.push([i, j, dist[i][j]]);
    }
  }

  costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from(Array(count - 1), (v, i) => i);
  for (const [nodeA, nodeB, cost] of costs) {
    if (!checkCycle(parent, nodeA, nodeB)) {
      answer += cost;
      unionNodes(parent, nodeA, nodeB);
    }
  }

  return answer;
}
