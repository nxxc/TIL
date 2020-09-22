function solution(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let K in A) {
    let X = A[K];
    if (X <= N) {
      if (counters[X - 1] < lastMax) {
        counters[X - 1] = lastMax;
      }
      counters[X - 1]++;
      if (max < counters[X - 1]) {
        max = counters[X - 1];
      }
    } else {
      lastMax = max;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < lastMax) {
      counters[i] = lastMax;
    }
  }

  return counters;
}
