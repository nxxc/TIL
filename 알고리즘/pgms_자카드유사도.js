const words = [
  ['FRANCE', 'french'],
  ['handshake', 'shake hands'],
  ['aa1+aa2', 'AAAA12'],
];

function tokenize(str) {
  let tokens = [];
  const word = new RegExp(/[a-z]{2}/);
  for (let i = 0; i < str.length - 1; i++) {
    tokens.push(str.toLowerCase().slice(i, i + 2));
  }
  tokens = tokens.filter((token) => word.exec(token));
  return tokens;
}

function solution(str1, str2) {
  const newStr1 = tokenize(str1);
  const newStr2 = tokenize(str2);

  const l1 = newStr1.length;
  const l2 = newStr2.length;

  const a = new Map();
  const b = new Map();

  let diff = 0;
  newStr1.forEach((v) => {
    a.has(v) ? a.set(v, a.get(v) + 1) : a.set(v, 1);
  });
  newStr2.forEach((v) => {
    b.has(v) ? b.set(v, b.get(v) + 1) : b.set(v, 1);
  });

  a.forEach((value, key) => {
    if (b.has(key)) {
      diff += Math.min(value, b.get(key));
    }
  });

  let answer = 0;
  answer = l1 === 0 && l2 === 0 ? 1 : diff / (l1 + l2 - diff);
  return Math.floor(65536 * answer);
}

words.forEach((word) => solution(...word));
