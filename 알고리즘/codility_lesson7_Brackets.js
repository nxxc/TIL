function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const stack = [];
  const pair = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  stack.push(S[0]);
  for (let i = 1; i < S.length; i++) {
    const curr = S[i];
    if (pair[stack[stack.length - 1]] === curr) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.length ? 0 : 1;
}
function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (!S.length) return 1;
  const stack = [];
  const pair = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  stack.push(S[0]);
  for (let i = 1; i < S.length; i++) {
    const curr = S[i];
    if (pair[stack[stack.length - 1]] === curr) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }

  return stack.length ? 0 : 1;
}
