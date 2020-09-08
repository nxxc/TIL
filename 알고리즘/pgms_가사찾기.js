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
const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
const queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?'];

class Trie {
  constructor() {
    this.child = {};
    this.sum = 0;
  }

  insert(word) {
    let trie = this;
    trie.sum += 1;
    for (const str of word) {
      if (trie.child[str] === undefined) {
        trie.child[str] = new Trie();
      }
      trie = trie.child[str];
      trie.sum += 1;
    }
  }

  getCount(query) {
    let trie = this;
    for (const str of query) {
      if (str === '?') return trie.sum;
      if (trie.child[str] === undefined) return 0;
      trie = trie.child[str];
    }
    return 0;
  }
}

function solution(words, queries) {
  const ts = {};
  const rts = {};
  let answer = [];

  words.forEach((word) => {
    const { length } = word;
    if (ts[length] === undefined) {
      ts[length] = new Trie();
      rts[length] = new Trie();
    }
    ts[length].insert(word);
    rts[length].insert([...word].reverse().join(''));
  });

  answer = queries.map((q) => {
    const { length } = q;
    if (ts[length] === undefined) return 0;
    if (q[0] === '?') return rts[length].getCount([...q].reverse().join(''));
    return ts[length].getCount(q);
  });
  return answer;
}

// trie 자료구조 이용 갯수마다 다른 트라이 만들고 반대로 검색하는 트라이도 따로 만들어서 풀이