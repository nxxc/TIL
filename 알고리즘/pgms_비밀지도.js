//[1차] 비밀지도
function solution(n, arr1, arr2) {
  let answer = arr1.map((v, i) =>
    (v | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/1/g, '#')
      .replace(/0/g, ' ')
  );

  return answer;
}

// 비트연산자 알아두기
// String.prototype.padStart() 메서드 알아두기
// padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워,
// 주어진 길이를 만족하는 새로운 문자열을 반환합니다.
// 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.
