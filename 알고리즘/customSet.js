const removeOverlap = (arr) =>
  arr.reduce((a, c) => (a.includes(c) ? a : [...a, c]), []);

const sumArr = (base, other) =>
  other.reduce((a, c) => (a.includes(c) ? a : [...a, c]), base);

const complement = (base, other) => base.filter((v) => !other.includes(v));

const intersect = (base, other) => base.filter((v) => other.includes(v));
