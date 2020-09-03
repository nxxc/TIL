function solution(p) {
  let left = 0; // ( 갯수
  let right = 0; // ) 갯수
  if (p === '') return ''; // 빈 문자열일 경우 빈 문자열 반환
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') left++; // ( 카운팅
    if (p[i] === ')') right++; // ) 카운팅

    if (left === right) {
      // 갯수가 나눠지면 u,v 로 쪼개기
      // left === right 라는것은 균형잡힌 문자열이라는 뜻

      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1);

      if (u[0] === '(') {
        // 지문 3번 과정
        // u[0] 이 ( 로 시작하면 u는 올바른 문자열   u[0] 이 ) 로 시작하면 u는 균형잡힌 문자열
        // u는 항상 균형잡힌 문자열이기 때문에  ( 로 시작하면 무조건 올바른 문자열이다 뜻
        return (u += solution(v));
      } else {
        //지문 4번 과정
        let emptyStr = '';
        emptyStr += '(';
        emptyStr += solution(v);
        emptyStr += ')';

        for (let j = 1; j < u.length - 1; j++) {
          // u 의 첫번째 문자열과 마지막 문자열을 제외하고 뒤집어서 붙이기
          if (u[j] === '(') emptyStr += ')';
          if (u[j] === ')') emptyStr += '(';
        }
        return emptyStr;
      }
    }
  }
}

// 재귀적으로 수행한다 => 재귀함수 호출해라
// 반환한다 => return 해라
