class Node {
  constructor(index, x, y) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }
}

function addNode(parent, child) {
  if (child.x < parent.x) {
    if (parent.left === null) {
      parent.left = child;
    } else {
      addNode(parent.left, child);
    }
  } else if (parent.right === null) {
    parent.right = child;
  } else {
    addNode(parent.right, child);
  }
}

function preOrder(arr, node) {
  if (node === null) return;

  arr[0].push(node.index);
  preOrder(arr, node.left);
  preOrder(arr, node.right);
}

function postOrder(arr, node) {
  if (node === null) return;

  postOrder(arr, node.left);
  postOrder(arr, node.right);
  arr[1].push(node.index);
}

function solution(nodeinfo) {
  const answer = [[], []];
  const nodeList = [];

  for (let i = 0; i < nodeinfo.length; i++) {
    const [x, y] = nodeinfo[i];
    nodeList.push(new Node(i + 1, x, y));
  }
  nodeList.sort((a, b) => (a.y === b.y ? a.x - b.x : b.y - a.y));

  const rootNode = nodeList[0];

  for (let i = 1; i < nodeList.length; i++) {
    addNode(rootNode, nodeList[i]);
  }

  console.log(nodeList);

  preOrder(answer, rootNode);
  postOrder(answer, rootNode);

  return answer;
}
