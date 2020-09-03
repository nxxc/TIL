function solution(n, words) {
  let answer = 0;
  let list = [];
  for (let i = 0; i < words.length - 1; i++) {
    let curr = words[i];
    let next = words[i + 1];
    list.push(curr);
    if (curr[curr.length - 1] !== next[0] || list.includes(next)) {
      answer = i + 1;
      break;
    }
  }

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
