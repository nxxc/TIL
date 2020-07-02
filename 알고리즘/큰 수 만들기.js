function solution(number, k) {
  let number2 = [...number];
  var answer = '';
  let count = 0;
  let idx = 0;
  while (1) {
    if (count === k) {
      break;
    }
    if (idx === number2.length) {
      number2.splice(number2.length, 1);
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

function solution(number, k) {
  let number2 = [...number];
  let count = 0;
  let idx = 0;
  while (1) {
    if (count === k) break;

    if (idx === number2.length - 1) {
      number2.splice(number2.length - 1, 1);
      count++;
      idx = 0;
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

// 큰 수 만들기 v2
// if (idx === number2.length - 1) {
//   number2.splice(number2.length - 1, 1);
//   count++;
//   idx = 0;
// }
// 이 부분 추가 한숫자로만 이루어진 경우나 내림차순으로 되어있을경우 추가 => 테스트케이스 12번 해결
// 아직 테스트케이스 10번은 시간초과
