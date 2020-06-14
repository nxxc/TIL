'use strict';

// Aray

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position

const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]); //🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 배열의 마지막 인덱스 쉽게 찾는법 배열길이-1

// 3.Looping over an array
// print all fruits
// a.for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}
//c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits);

// pop: remove ian item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift:  add an item to the beginning
fruits.unshift('🍓', '🍑');
console.log(fruits);

// shift:  remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// pop push 는 기존의 데이터를 옮기지 않고 빈 공간에 넣었다 뺐다 함
// shift, unshift 는 기존의 데이터를 다 옮겨야 해서 느림

// splice: remove an item byu index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // ["🍎", "🍌", "🍓", "🍑", "🍋"]
fruits.splice(1, 1); // number를 지정하지않으면 인덱스부터 마지막까지 모두 지움
console.log(fruits); //["🍎", "🍓", "🍑", "🍋"]
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits); //["🍎", "🍏", "🍉", "🍑", "🍋"]

// combine two arrays
const fruits2 = ['🥭', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
// find the index
console.clear();
console.log(fruits);

// indexOf :  find the index
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.indexOf('🥥')); // -1

// includes
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('🥥')); // false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🍎'));
