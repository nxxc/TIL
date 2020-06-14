let kim = {
  name: 'kim',
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

// this가 속해있는 methods 가 속해있는 객체를 가르키는 약속
console.log(kim.sum());
