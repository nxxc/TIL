function solution(triangle) {
  let answer = 0;
  let dp = Array(triangle.length)
    .fill(0)
    .map((v, i) => Array(triangle[i].length).fill(0));
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++)
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (i === j) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
  }
  answer = Math.max(...dp[triangle.length - 1]);
  return answer;
}
