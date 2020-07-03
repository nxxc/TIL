function solution(s, n) {
  var answer = '';

  [...s].forEach((v) => {
    let asc = v.charCodeAt();
    if (v != ' ') {
      if (asc > 90) {
        asc = ((asc + n - 97) % 26) + 97;
        answer += String.fromCharCode(asc); // 소문자인 경우
      } else {
        asc = ((asc + n - 65) % 26) + 65;
        answer += String.fromCharCode(asc); // 대문자인 경우
      }
    } else {
      answer += ' '; // 공백문자인 경우
    }
  });

  return answer;
}

// string.charCodeAt(index)  => 인덱스에 있는 문자에 아스키코드 반환
// String.fromCharCode(ascii) => 아스키코드를 문자로 변경
// 나머지 연산자 활용하는 방법 알아두기
