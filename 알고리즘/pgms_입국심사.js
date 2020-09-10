const n = 6;
const times = [7, 10];

function solution(n, times) {
  times.sort((a, b) => a - b);

  let answer = 0;
  let left = 1;
  let right = n * times[times.length - 1];

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;

    times.forEach((time) => {
      count += Math.floor(mid / time);

      if (count >= n) {
        answer = Math.min(right, mid);
      }
    });

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(n, times));
