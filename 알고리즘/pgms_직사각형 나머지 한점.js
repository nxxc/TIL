function solution(v) {
  const x = new Map();
  const y = new Map();
  v.forEach((v) => {
    if (x.has(v[0])) {
      x.set(v[0], x.get(v[0]) + 1);
    } else {
      x.set(v[0], 1);
    }
  });
  v.forEach((v) => {
    if (y.has(v[1])) {
      y.set(v[1], y.get(v[1]) + 1);
    } else {
      y.set(v[1], 1);
    }
  });
  const newX = [...x].filter((x) => x[1] == 1);
  const newy = [...y].filter((y) => y[1] == 1);
  console.log(newX, newy);
  return [newX[0][0], newy[0][0]];
}

// x,y 좌표 카운트해서 1인것들 답으로

//x=  v[0][0]^v[1][0]^v[2][0]
//y=  v[1][0]^v[1][1]^v[1][2]
//이것도 정답 비트연산자 ^ 활용
// ^ 연산자에 같은값을 두번 연산하면 원래 숫자로 돌아옴
