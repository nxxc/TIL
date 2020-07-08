function solution(files) {
  var answer = [];
  let data = files.map((v, i) => {
    let index = i;
    let Name = v;
    let Head = v.split(/\d/).shift().trim();
    let Tail = v.split(/\d/).pop().trim();
    let number = v
      .split(/\D/)
      .filter((v) => v !== '')
      .shift();
    if (number.length > 5) number.slice(0, 5);
    return { index, Name, Head, Number: parseInt(number), Tail };
  });

  const compare = (A, B) =>
    A.Head.toUpperCase().localeCompare(B.Head.toUpperCase());

  data.sort((a, b) => {
    if (compare(a, b) === 0) {
      if (a.Number === b.Number) {
        return a.index - b.index;
      }
      return a.Number - b.Number;
    } else {
      return compare(a, b);
    }
  });

  return data.reduce((acc, curr) => acc.concat(curr.Name), []);
}

// 파일명 정렬 v1
// 정렬부분에서 문제있는듯
// 테스트케이스 6,7,8,9, 빼고 통과
