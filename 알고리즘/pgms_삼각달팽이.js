function solution(n) {
  var answer = [];
  const map = Array(n)
    .fill(0)
    .map((v, i) => Array(i + 1).fill(0));
  const maxNum = (n * (n + 1)) / 2;
  let top = 0;
  let left = 0;
  let right = n;
  let bottom = n;
  let state = 0;
  let num = 0;
  while (num <= maxNum) {
    if (state === 0) {
      for (let i = top; i < bottom; i++) {
        map[i][left] = num++;
      }
      left++;
      top++;
      state = 1;
      if (state === 1) {
        for (let i = left; i < right; i++) {
          map[bottom - 1][i] = num++;
        }
        bottom--;
        right--;
        state = 2;
      }

      if (state === 2) {
        console.log(state);
        console.log(bottom);
        for (let i = bottom; i < top; i--) {
          console.log(i, right);
          map[i][map[i].length - 1] = num++;
        }
        state = 0;
      }
    }
    break;
  }
  console.log(map);
  return answer;
}
