const alpha = 'A B C D E F G H I J K'.split(' ');

const routes = [
  ['A', 'B'],
  ['A', 'C'],
  ['A', 'F'],
  ['B', 'E'],
  ['B', 'D'],
  ['C', 'D'],
  ['D', 'K'],
  ['D', 'G'],
  ['E', 'H'],
  ['F', 'G'],
  ['G', 'H'],
  ['G', 'I'],
  ['G', 'J'],
  ['H', 'K'],
  ['H', 'J'],
  ['I', 'J'],
];

const Graph = new Map();

const addNode = (node) => {
  Graph.set(node, []);
};

const addEdge = (node, value) => {
  Graph.get(node).push(value);
};

alpha.forEach(addNode);
routes.forEach((route) => addEdge(...route));

function bfs(s, e) {
  const visited = new Set();
  const q = [s];
  while (q.length > 0) {
    const start = q.shift();
    const destinations = Graph.get(start);

    for (let destination of destinations) {
      if (destination === e) {
        console.log(start, destination, 'Hi');
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        q.push(destination);
        console.log(start, destination);
      }
    }
  }
  return;
}

let route = [];

function dfs(s, e, v = new Set()) {
  v.add(s);
  let list = [];
  const destinations = Graph.get(s);
  for (const destination of destinations) {
    route.push(destination);
    if (destination === e) {
      route.pop();
      return list;
    }
    if (!v.has(destination)) {
      dfs(destination, e, v);
    }
    route.pop();
  }
}
// console.log(Graph);
bfs('A', 'J');
dfs('A', 'J');
