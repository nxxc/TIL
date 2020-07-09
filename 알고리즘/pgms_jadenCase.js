function solution(s) {
  let answer = '';
  let list = [...s.toLowerCase()];
  let number = [0];
  for (let i = 1; i < s.length; i++) {
    if (list[i - 1] === ' ' && list[i] !== ' ') {
      number.push(i);
    }
  }
  answer = list
    .map((v, i) => (number.includes(i) ? v.toUpperCase() : v))
    .join('');
  return answer;
}

// number => 대문자로 바꿀 인덱스
// 첫번째는 무조건 toUpperCase()
// 앞에가 ' '이고 뒤에가 ' '가 아니면 뒤에를 toUpperCase()

// 다른사람 풀이

// function solution(s) {
//   return s
//     .split(' ')
//     .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
//     .join(' ');
// }

// solution(s);
