const a = [1, 2, 3, 4, 4, 5, 2, 3];
const b = [3, 4, 5, 6];

// 함수로
const removeOverlap = (arr) =>
  arr.reduce((a, c) => (a.includes(c) ? a : [...a, c]), []);

const sumArr = (base, other) =>
  other.reduce((a, c) => (a.includes(c) ? a : [...a, c]), base);

const complement = (base, other) => base.filter((v) => !other.includes(v));

const intersect = (base, other) => base.filter((v) => other.includes(v));

// 클래스
class customSet {
  constructor(base, other) {
    this.base = base.reduce((a, c) => (a.includes(c) ? a : [...a, c]), []);
    this.other = other.reduce((a, c) => (a.includes(c) ? a : [...a, c]), []);
  }
  sumArr = () =>
    this.other.reduce((a, c) => (a.includes(c) ? a : [...a, c]), this.base);

  complement = () =>
    [...this.base, ...this.other].filter((v) => !this.other.includes(v));

  intersect = () => this.base.filter((v) => this.other.includes(v));
}

const se = new customSet(a, b);

console.log(se.base);
console.log(se.other);
console.log(se.sumArr());
console.log(se.complement());
console.log(se.intersect());
