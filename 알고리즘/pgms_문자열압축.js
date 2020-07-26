function solution(s) {
  var answer = 0;
  var repeat = s.length;
  var arrForNewStr = [];

  // 1. 가능한 단위 수  = 1 ~ 문자열의 개수/2 이하**
  // 각 단위수에서 압축된 문자열 구하기
  for (var i = 0; i < repeat; i++) {
    var num = i + 1; // 압축 기준 단위 수
    var count = 1; // 동일 글자가 몇 번 반복되는지
    var newStr = '';
    for (var j = 0; j < s.length; j = j + num) {
      // 하나의 단위에 대한
      var currentSub = s.substring(j, j + num); //substring(a,b)
      var nextSub = s.substring(j + num, j + num + num);

      if (currentSub === nextSub) {
        count += 1;
      } else {
        if (count !== 1) {
          newStr = newStr + count + currentSub;
        } else {
          newStr = newStr + currentSub;
        }
        count = 1;
      }
    }
    // console.log(newStr);
    // 2. 각 경우의 문자열 개수중 가장 짧은 것
    arrForNewStr.push(newStr.length);
    // console.log(arrForNewStr);
  }

  answer = Math.min(...arrForNewStr);

  return answer;
}
