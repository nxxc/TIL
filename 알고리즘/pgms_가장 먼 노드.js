function solution(n, edge) {
  const check = Array(n + 1).fill(false);
  const dist = Array(n + 1).fill(0);
  const map = Array.from(Array(n + 1), () => []);

  // 방문헀는지 check 배열
  // 1번노드에서부터의 거리를 담는 dist
  // 노드들 양방향으로 연결해줄 map

  for (let [x, y] of edge) {
    map[x].push(y);
    map[y].push(x);
  }
  // 노드들 양방향으로 연결 편의상 index 0 무시

  const q = [1];
  check[1] = true;
  // q에 1번노드 넣고 방문 체크

  let max = 0;
  //최댓값 저장할 변수

  while (q.length !== 0) {
    const currNode = q.shift();
    // q에 첫번쨰 원소 꺼내기
    for (let i = 0; i < map[currNode].length; i++) {
      if (!check[map[currNode][i]]) {
        q.push(map[currNode][i]);
        check[map[currNode][i]] = true;
        dist[map[currNode][i]] = dist[currNode] + 1;
        max = dist[map[currNode][i]];
        // 연결된 노드들 중 방문 안한 노드들
        // 1.q에 넣어주고
        // 2.방문 check 표시
        // 3.거리는 현재 노드+1
        // 4.최댓값 갱신
      }
    }
  }

  let count = 0;
  for (let i = 0; i < dist.length; i++) {
    if (dist[i] === max) count++;
  }
  // 거리들 순회하며 count 하기
  return count;
}
