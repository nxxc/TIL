const a = [
  [0, 50],
  [0, 22],
  [2, 10],
  [1, 4],
  [4, -13],
];

function solution(arr) {
  const map = Array.from(Array(arr.length), (_, i) => Array(i + 1).fill(null));
  for (let i = 0; i < arr.length; i++) {
    const [j, num] = arr[i];
    map[i][j] = num;
    if (i > 0) {
      if (j === 0) {
        for (let k = j; k < map[i].length - 1; k++) {
          map[i][k + 1] = map[i - 1][k] - map[i][k];
        }
      } else if (j === map[i].length) {
        for (let k = j; k > 0; k--) {
          map[i][k - 1] = map[i - 1][k - 1] - map[i][k];
        }
      } else {
        for (let m = j; m > 0; m--) {
          map[i][m - 1] = map[i - 1][m - 1] - map[i][m];
        }
        for (let n = j; n < map[i].length; n++) {
          for (let k = j; k < map[i].length - 1; k++) {
            map[i][k + 1] = map[i - 1][k] - map[i][k];
          }
        }
      }
    }
  }
  console.log(map);
}

solution(a);
