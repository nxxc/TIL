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

function solution(n, costs) {
  var answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const parent = Array.from(Array(n), (v, i) => i);
  for (const [nodeA, nodeB, cost] of costs) {
    if (!checkCycle(parent, nodeA, nodeB)) {
      answer += cost;
      unionNodes(parent, nodeA, nodeB);
    }
  }
  return answer;
}
