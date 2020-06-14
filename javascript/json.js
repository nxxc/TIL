// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump() {
    console.log(`${this.name} can jump!`);
  },
};
// 객체안에서 메서드는 화살표함수로 선언할 경우 this는 전역객체를 가르키므로 일반함수로 선언해야 해당 this가 해당객체를 가르킴

json = JSON.stringify(rabbit);
console.log(json); // jump는 포함되지 않음

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key} , value:${value}`);
  return key === 'name' ? 'nxxc' : value;
});
console.log(json);

// 2.JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key} , value : ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});

// parse로 가져온 birthDate 는 그냥 string이라서 .getDate() 메서드를 가지고 있지 않음
// 콜백함수로 'birthDate'라는 키가 있그면 new Date(value) obj 프로퍼티를 변환

console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
