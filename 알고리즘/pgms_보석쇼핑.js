function solution(gems) {
  function setSort(list) {
    return [...new Set(list)].sort();
  }
  let answer = [];
  const newGems = setSort(gems);
  const newGemsLength = newGems.length;
  const gemlength = gems.length;
  (function loop() {
    for (let i = 0; i <= gemlength - newGemsLength; i++) {
      for (let j = 0; j + i <= gemlength - newGemsLength; j++) {
        const sliGems = gems.slice(j, newGemsLength + j + i);
        const newsligems = setSort(sliGems);
        if (JSON.stringify(newsligems) === JSON.stringify(newGems)) {
          return (answer = { i: i, j: j, newGemsLength: newGemsLength });
        }
      }
    }
  })();

  return [answer.j + 1, answer.i + answer.j + answer.newGemsLength];
}

// v1
// pgms_보석쇼핑
// 이중포문으로 잘라가면서 비교
// 효율성 0
