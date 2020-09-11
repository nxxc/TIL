function solution(s) {
  var answer = 0;
  const l = s.length;

  let dp = Array.from(Array(l), () => Array(l).fill(0));

  for (let i = 0; i < l; i++) {
    dp[i][i] = 1;
    answer = 1;
  }

  for (let i = 0; i < l - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1;
      answer = 2;
    }
  }

  for (let step = 3; step <= l; step++) {
    for (let i = 0; i <= l - step; i++) {
      const j = i + step - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1] === 1) {
        dp[i][j] = 1;
        answer = step;
      }
    }
  }

  return answer;
}
