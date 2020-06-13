'use strict';
// Object-oriented prograaming
// class: template
// //object: instance of a class
// JavaScript class
// - introduced in ES6
// - syntactical suga over prototype-based inheritance

//1. Class declarations

class Person {
  //constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const nxxc = new Person('nxxc', 20);
console.log(nxxc.name);
console.log(nxxc.age);
nxxc.speak();

// 2. Getter and setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }

    this._age = value < 0 ? 0 : value;
    // age 가 음수일경우 0 아닐경우 그대로 사용
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3. Fields (public, private)
// Too soon!

class Experiment {
  publicField = 2;
  #privateField = 0;
}

// #가 앞에붙은 private값은 class 내부에서만 조회 가능

const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

//4. Static properties and methods
//Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
Article.printPublisher();

//5. Inheritance
//a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('💩');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
console.log(triangle.getArea());
triangle.draw();

//6. Class Checking : instanceOf
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true  모든 class는 object의 instance
