'use strict';

// Promise is  JavaScript Object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Prodcuer
// when new Promise is createdm the executor runs automatically
// promise 객체를 만드는 순간 executor 가 실행됨

const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log('doing Something....');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

//2. Consumers:  then, catch, finally
promise
  .then((value) => {
    console.log(value);
  }) //성공하면 resolve가 전달한 value 실패하면 reject가 전달한 value
  .catch((error) => {
    console.log(error);
  }) //error 가 있으면 error를 캐치함
  .finally(() => {
    console.log('finally');
  }); //성공하는 실패하든 상관없이 실행됨

// then은 Promise object를 반환함 그래서 catch 를 사용할 수 있음

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4.Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen}=>🥚`), 1000);
    setTimeout(() => reject(new Error(`${hen}=>🥚`)), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((err) => {
    return `🍎`;
  })
  .then(cook)
  .then(console.log);

// 전달하는 args가 한개이면 생략가능 .then(val=>function(val))  ==> .then(function)
// catch 를 어디에 두냐에 따라 에러 핸들링이 달라짐
