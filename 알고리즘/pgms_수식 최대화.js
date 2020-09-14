/* eslint-disable */

function cal(order, num1, num2) {
  const make = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  return make[order](num1, num2);
}
function solution(expression) {
  const priorities = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '*', '+'],
    ['-', '+', '*'],
  ];
  const results = [];

  for (const priority of priorities) {
    const splitted = expression.split(/([\*\+-])/);
    for (const order of priority) {
      while (splitted.includes(order)) {
        const orderIndex = splitted.indexOf(order);
        const num1 = splitted[orderIndex - 1];
        const num2 = splitted[orderIndex + 1];
        splitted.splice(
          orderIndex - 1,
          3,
          cal(order, Number(num1), Number(num2))
        );
      }
    }
    results.push(Math.abs(splitted[0]));
  }

  return Math.max(...results);
}

// splice 활용해서 3개씩 끊어서 계산
