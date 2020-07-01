const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
const queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?'];
function solution(words, queries) {
  const startRe = /^\w/;
  let answer = Array(queries.length).fill(0);
  let newQueries = [];

  for (let querie of queries) {
    querie.match(startRe)
      ? newQueries.push(new RegExp(`^${querie.replace(/\?\?*/, '')}`))
      : newQueries.push(new RegExp(`${querie.replace(/\?\?*/, '')}$`));
  }
  // 쿼리 받아서 정규표현식으로 만들기

  newQueries.forEach((querie, i) => {
    let count = 0;
    let filtedWords = words.filter((word) => word.length === queries[i].length);
    filtedWords.forEach((word) => (word.match(querie) ? count++ : null));
    answer[i] = count;
  });

  // 단어가 정규표현식값에 match되면 count++

  return answer;
}
console.log(solution(words, queries));

// 정확성 통과 25점
// 효율성 탈락 30점
// 총 55점
