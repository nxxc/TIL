function solution(array, commands) {
  var answer = [];
  for (let command of commands) {
    answer.push(
      array
        .filter((_, i) => i >= command[0] - 1 && i <= command[1] - 1)
        .sort((a, b) => a - b)[command[2] - 1]
    );
  }
  return answer;
}

// k번째 수
// 1. 인덱스별로 필터링
// 2. 정렬 후 인덱스로 조회해서 answer에 push
