function solution(s, n) {
  var answer = '';

  [...s].forEach((v) => {
    let asc = v.charCodeAt();
    if (v != ' ') {
      if (asc > 90) {
        asc = ((asc + n - 97) % 26) + 97;
        answer += String.fromCharCode(asc);
      } else {
        asc = ((asc + n - 65) % 26) + 65;
        answer += String.fromCharCode(asc);
      }
    } else {
      answer += ' ';
    }
  });

  return answer;
}
