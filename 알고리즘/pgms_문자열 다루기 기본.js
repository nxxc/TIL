//문자열 다루기 기본
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return [...s].map((v) => parseInt(v)).includes(NaN) ? false : true;
  } else {
    return false;
  }
}

// 이상한 문자열 만들기
function solution(s) {
  return s
    .split(' ')
    .map((v) =>
      [...v].map((v, i) => (i % 2 == 0 ? v.toUpperCase() : v)).join('')
    )
    .join(' ');
}

// 행렬 덧셈 v1
function solution(arr1, arr2) {
  let answer = [];
  for (let i in arr1) {
    answer[i] = [];
    for (let j in arr1[i]) {
      answer[i][j] = [];
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

//행렬 덧셈 v2
function solution(arr1, arr2) {
  let answer = arr1.map((v, i) => v.map((v2, j) => arr1[i][j] + arr2[i][j]));
  return answer;
}
