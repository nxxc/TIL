function solution(n) {
  if (n == 0) {
    return 0;
  }
  let answer = Array(n)
    .fill(0)
    .map((_, i) => (n % (i + 1) == 0 ? i + 1 : false))
    .filter((v) => v != false)
    .reduce((a, b) => a + b);
  return answer;
}

// 약수의 합
// 성능은 별로인듯
