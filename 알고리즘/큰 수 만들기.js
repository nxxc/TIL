function solution(number, k) {
  let number2 = [...number];
  var answer = '';
  let count = 0;
  let idx = 0;
  while (1) {
    if (count === k) {
      break;
    }
    if (number2[idx] < number2[idx + 1]) {
      number2.splice(idx, 1);
      count++;
      idx = 0;
    } else {
      idx++;
    }
  }

  return number2.join().replace(/,/g, '');
}

// 큰 수 만들기 v1
// 두자리 비교하면서 작으면 제거
// 테스트케이스 10 12 시간초과
