/* eslint-disable */
const words = ['go', 'gone', 'guild'];

class Node {
  constructor(value = '') {
    this.value = value;
    this.child = {};
    this.sum = 0;
    this.length = this.value.length;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let currentNode = this.root;
    currentNode.sum++;
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (!currentNode.child[currentChar]) {
        currentNode.child[currentChar] = new Node(
          currentNode.value + currentChar
        );
      }
      currentNode = currentNode.child[currentChar];
      currentNode.sum++;
    }
    currentNode.end = true;
  }

  search(str) {
    let currentNode = this.root;

    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      }
      if (str === currentNode.value) {
        return str.length;
      }
      if (currentNode.sum === 1) {
        return currentNode.length;
      }
    }
  }
}

function solution(words) {
  let answer = 0;
  words.sort();

  const t = new Trie();

  words.forEach((v) => t.insert(v));
  words.forEach((v) => (answer += t.search(v)));
  console.log(answer);
  return answer;
}

solution(words);
