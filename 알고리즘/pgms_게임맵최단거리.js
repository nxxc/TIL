function solution(maps) {
  let row = maps.length;
  let column = maps[0].length;
  var answer = 0;
  let check = Array.from(Array(row), () => Array(column).fill(0));
  let start = [0, 0];

  function bfs(start, check) {
    const dy = [0, 1, 0, -1];
    const dx = [1, 0, -1, 0];
    const [x, y] = start;
    const q = [];
    q.push(start);
    check[x][y] = 1;

    while (q.length) {
      const [currX, currY] = q.shift();
      for (let i = 0; i < 4; i++) {
        const [nextX, nextY] = [currX + dx[i], currY + dy[i]];

        if (nextX < 0 || nextY < 0 || nextX >= row || nextY >= column) continue;
        if (check[nextX][nextY] > 0 || maps[nextX][nextY] === 0) continue;

        q.push([nextX, nextY]);
        check[nextX][nextY] = check[currX][currY] + 1;
      }
    }
    return check;
  }
  bfs(start, check);
  return check[row - 1][column - 1] === 0 ? -1 : check[row - 1][column - 1];
}
