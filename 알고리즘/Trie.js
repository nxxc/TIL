// const Node = function () {
//   // 각각의 노드
//   this.keys = new Map(); // 현재 노드에서 갈 수 있는 문자들을 저장할 Map
//   this.end = false; // 해당 문자에서 끝나는 문자열이 있는지 확인.
//   this.count = 0; // 지나 갔을 때 1 씩 증가시켜, 1보다 클 경우 지나간 문자가 자신말고 더 있다는 것을 알 수 있다.
//   this.plusCount = function () {
//     this.count += 1;
//   };
//   this.setEnd = function () {
//     this.end = true;
//   };
//   this.isEnd = function () {
//     return this.end;
//   };
// };

// const Trie = function () {
//   // Trie 자료구조
//   this.root = new Node();

//   this.add = function (input, node = this.root) {
//     // Trie에 문자열을 추가 하는 메소드.
//     if (input.length === 0) {
//       // 끝날 경우 end로 표시하고 종료
//       node.setEnd();
//       return;
//     } else if (!node.keys.has(input[0])) {
//       // 첫번째 문자가 없으면 추가 해줌.
//       node.keys.set(input[0], new Node());
//     }
//     node.plusCount(); // 지나갔다고 1 증가 시킨다.
//     return this.add(input.substr(1), node.keys.get(input[0])); // 첫번재 문자를 뺀 문자열과, 해당 값의 Map으로 재귀
//   };

//   this.isSubWord = function (word) {
//     // 자신이 부분 문자열이 되는지 확인.
//     let node = this.root;
//     while (word.length > 0) {
//       if (!node.keys.has(word[0])) {
//         return false;
//       } else {
//         node = node.keys.get(word[0]);
//         word = word.substr(1);
//       }
//     }
//     return node.count > 0 ? true : false; // 끝까지 갔을 때 자신의 count가 0보다 크면 부분 문자열이다. 마지막 문자열일 때는 +1을 해주지 않으므로 마지막까지 갔을 때 node의 count가 0이면 그 문자는 유니크한 것.
//   };

//   this.isWord = function (word) {
//     // 있는 문자인지 확인 하는 메소드
//     let node = this.root;
//     while (word.length > 1) {
//       if (!node.keys.has(word[0])) {
//         return false;
//       } else {
//         node = node.keys.get(word[0]);
//         word = word.substr(1);
//       }
//     } // 마지막 문자가 해당 key에 있고 그 node가 end이면 true 아닐 경우 false
//     return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
//   };

//   this.print = function () {
//     // 모든 문자열을 array로 return 해주는 함수.
//     let words = [];
//     let search = function (node = this.root, string) {
//       if (node.keys.size !== 0) {
//         for (let letter of node.keys.keys()) {
//           search(node.keys.get(letter), string.concat(letter)); // search 재귀, concat으로 현재 문자열은 그대로 두고 letter를 더한 문자열을 반환하게 한다.
//         }
//         if (node.isEnd()) {
//           words.push(string);
//         }
//       } else {
//         string.length > 0 ? words.push(string) : undefined;
//         return;
//       }
//     };
//     search(this.root, '');
//     return words.length > 0 ? words : null;
//   };
// };

// const myTrie = new Trie();
// myTrie.add('ball');
// myTrie.add('bat');
// myTrie.add('doll');
// myTrie.add('dark');
// myTrie.add('do');
// myTrie.add('sense');
// console.log('doll', myTrie.isWord('doll'));
// console.log('dor', myTrie.isWord('dor'));
// console.log('do', myTrie.isSubWord('do'));
// console.log('doll', myTrie.isSubWord('doll'));
// console.log('zzz', myTrie.isSubWord('zzz'));
// console.log(myTrie.print());

// /*
// doll true
// dor false
// do true
// doll false
// zzz false
// [ 'ball', 'bat', 'doll', 'do', 'dark', 'sense' ]
// */

// class Node2 {
//   constructor() {
//     this.keys = new Map();
//     this.end = false;
//     this.count = 0;
//   }

//   plusCount() {
//     this.count += 1;
//   }

//   setEnd() {
//     this.end = true;
//   }
//   isEnd() {
//     return this.end;
//   }
// }

// class Trie2 {
//   constructor() {
//     this.root = new Node2();
//   }

//   add(input, node = this.root) {
//     if (input.length === 0) {
//       node.setEnd();
//       return;
//     } else if (!node.keys.has(input[0])) {
//       node.keys.set(input[0], new Node2());
//     }
//     node.plusCount();
//     return this.add(input.substr(1), node.keys.get(input[0]));
//   }

//   isSubWord(word) {
//     let node = this.root;
//     while (word.length > 0) {
//       if (!node.keys.has(word[0])) {
//         return false;
//       } else {
//         node = node.keys.get(word[0]);
//         word = word.substr(1);
//       }
//     }
//     return node.count > 0 ? true : false;
//   }

//   isWord(word) {
//     let node = this.root;
//     while (word.length > 0) {
//       if (!node.keys.has(word[0])) {
//         return false;
//       } else {
//         node = node.keys.get(word[0]);
//         word = word.substr(1);
//       }
//     }
//     return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
//   }
//   print() {
//     // 모든 문자열을 array로 return 해주는 함수.
//     let words = [];
//     let search = function (node = this.root, string) {
//       if (node.keys.size !== 0) {
//         for (let letter of node.keys.keys()) {
//           search(node.keys.get(letter), string.concat(letter)); // search 재귀, concat으로 현재 문자열은 그대로 두고 letter를 더한 문자열을 반환하게 한다.
//         }
//         if (node.isEnd()) {
//           words.push(string);
//         }
//       } else {
//         string.length > 0 ? words.push(string) : undefined;
//         return;
//       }
//     };
//     search(this.root, '');
//     return words.length > 0 ? words : null;
//   }
// }

// const myTrie2 = new Trie2();
// myTrie2.add('ball');
// myTrie2.add('bat');
// myTrie2.add('doll');
// myTrie2.add('dark');
// myTrie2.add('do');
// myTrie2.add('sense');
// console.log('doll', myTrie2.isWord('doll'));
// console.log('dor', myTrie2.isWord('dor'));
// console.log('do', myTrie2.isSubWord('do'));
// console.log('doll', myTrie2.isSubWord('doll'));
// console.log('zzz', myTrie2.isSubWord('zzz'));
// console.log(myTrie2.print());

class Node {
  constructor(value = '') {
    this.value = value; //현재 경로까지의 누적값
    this.end = false; //해당 노드에서 끝나는 문자열이 있는지 여부
    this.child = {}; //자식
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root; //루트노드를 시작으로 탐색하면서 삽입한다

    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];

      //만일, 해당 키를 가진 자식이 없다면 새 노드를 만들어준다.
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(
          currentNode.value + currentChar
        );
      }

      currentNode = currentNode.child[currentChar]; // 자식 노드로 이동한다.
    }
    currentNode.end = true; //해당 노드에서 끝나는 단어가 있음을 알린다
  }

  search(string) {
    let currentNode = this.root; //역시나 시작은 루트

    for (let i = 0; i < string.length; i++) {
      const currentChar = string[i];
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar]; // 있으면 노드 이동
      } else {
        return '';
      }
    }
    //찾는 문자열의 마지막까지 탐색했다는것은, 문자열을 찾았다는 것.
    return currentNode.value;
  }
}

const myTrie = new Trie();

myTrie.insert('hell');
myTrie.insert('hep');
myTrie.insert('hel');

console.log(myTrie.search('hell')); // 찾아야함
console.log(myTrie.search('hello'));
console.log(myTrie.search('hep')); // 찾아야함
console.log(myTrie.search('help'));
console.log(myTrie.search('world'));
