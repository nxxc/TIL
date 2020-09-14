function solution(food_times, k) {
  const solted = food_times
    .map((time, i) => ({ time, i: i + 1 }))
    .sort((a, b) => a.time - b.time);

  if (k >= food_times.reduce((a, b) => a + b)) return -1;

  let i = 0;

  while (true) {
    let sub =
      (solted[i].time - (i === 0 ? 0 : solted[i - 1].time)) *
      (solted.length - i);
    if (k - sub < 0) break;
    k -= sub;
    i++;
  }

  let n = k % (solted.length - i);
  let remain = solted.slice(i).sort((a, b) => a.i - b.i);

  return remain[n].i;
}
