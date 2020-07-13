// const tickets = [
//   ['ICN', 'JFK'],
//   ['HND', 'IAD'],
//   ['JFK', 'HND'],
// ];

const tickets = [
  ['ICN', 'SFO'],
  ['ICN', 'ATL'],
  ['SFO', 'ATL'],
  ['ATL', 'ICN'],
  ['ATL', 'SFO'],
];

const Graph = new Map();
const addPort = (ports) => ports.forEach((v) => Graph.set(v, []));
const addLine = (tickets) => tickets.forEach((v) => Graph.get(v[0]).push(v[1]));

const makePorts = (tickets) => {
  let temp = new Set(tickets.reduce((a, b) => a.concat(b), []));
  return [...temp];
};

function solution(tickets) {
  var answer = [];
  let ports = makePorts(tickets);
  addPort(ports);
  addLine(tickets);
  console.log(Graph);
  return answer;
}

solution(tickets);
