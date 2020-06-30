const readline = require('readline');

const orderList = ['show', 'add', 'update', 'delete', 'q'];
const stateList = ['todo', 'doing', 'done'];

const idList = Array(999)
  .fill()
  .map((v, i) => i);

const idgenerator = () => {
  return idList.pop();
};

let todos = [
  { id: idgenerator(), text: '자바스크립트 공부하기', state: 'todo', tag: [] },
  { id: idgenerator(), text: 'ios공부하기', state: 'todo', tag: [] },
  { id: idgenerator(), text: '', state: 'doing', tag: [] },
];
function showCurrent() {
  const todoList = todos
    .filter((todo) => todo.state === stateList[0])
    .map((v) => v.id);
  const doingList = todos
    .filter((todo) => todo.state === stateList[1])
    .map((v) => v.id);
  const doneList = todos
    .filter((todo) => todo.state === stateList[2])
    .map((v) => v.id);
  return console.log(
    `현재상태 : todo: [${todoList}], doing :[${doingList}], done: [${doneList}]`
  );
}

function showListByState(state) {
  const stateList = todos.filter((todo) => todo.state === state);
  console.log(
    `${state}리스트 : 총${stateList.length}건 : ${stateList.reduce(
      (p, c) => `'${p.text},${p.id}번' , '${c.text},${c.id}'`
    )}`
  );
  init();
  return;
}

function addTodo(addText, addTag) {
  const tag = eval(addTag);
  const id = idgenerator();
  const newtodos = [
    ...todos,
    { id: id, text: addText, state: 'todo', tag: tag },
  ];
  todos = newtodos;
  console.log(`${addText}가 추가됐습니다.(id:${id})`);
  showCurrent();
  init();
  return;
}

function updateTodo(id, state) {
  const update = todos.find((v) => v.id === parseInt(id));
  todos[todos.indexOf(update)].state = state;
  console.log(`${update.text} ${state}로 변경됐습니다`);
  showCurrent();
  init();
  return;
}

function delelteTodo(id) {
  const update = todos.find((v) => v.id === parseInt(id));
  const index = todos[todos.indexOf(update)];
  todos.splice(index, 1);
  console.log(`${update.text} ${update.state}목록에서 삭제됐습니다`);
  showCurrent();
  init();
  return;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function init() {
  rl.question('명령하세요 : ', (answer) => {
    const order = answer.split('$$');
    if (order[0] === orderList[0] && order[1] === 'current') {
      showCurrent();
      init();
    } else if (order[0] === orderList[0] && stateList.includes(order[1])) {
      const state = order[1];
      showListByState(state);
    } else if (order[0] === orderList[1]) {
      addTodo(order[1], order[2]);
    } else if (order[0] === orderList[2]) {
      setTimeout(() => updateTodo(order[1], order[2]), 2000);
    } else if (order[0] === orderList[3]) {
      delelteTodo(order[1]);
    } else if (answer === orderList[4]) {
      console.log('(프로그램 종료)');
      rl.close();
    } else {
      init();
    }
  });
}
init();
