'use strict';

// 옷 만들기 클래스
class Clothes {
  constructor(sex, size, color, category) {
    this.sex = sex;
    this.size = size;
    this.color = color;
    this.category = category;
  }
}

// 옷 리스트들 만들기
const clothes = [
  new Clothes('male', 'smale', 'blue', 'p'),
  new Clothes('male', 'smale', 'blue', 'p'),
  new Clothes('male', 'smale', 'pink', 's'),
  new Clothes('male', 'medium', 'blue', 't'),
  new Clothes('male', 'medium', 'yellow', 'p'),
  new Clothes('male', 'large', 'pink', 't'),
  new Clothes('male', 'large', 'blue', 't'),
  new Clothes('male', 'large', 'yellow', 'p'),
  new Clothes('female', 'medium', 'blue', 'p'),
  new Clothes('female', 'medium', 'pink', 's'),
  new Clothes('female', 'medium', 'blue', 's'),
  new Clothes('female', 'smale', 'yellow', 't'),
  new Clothes('female', 'smale', 'blue', 'p'),
  new Clothes('female', 'large', 'yellow', 's'),
  new Clothes('female', 'large', 'pink', 's'),
  new Clothes('female', 'large', 'pink', 't'),
  new Clothes('female', 'small', 'pink', 'p'),
];

const btnList = document.querySelectorAll('.filter-btn');
const ul = document.querySelector('.items');

// 버튼마다 클릭 이벤트 등록
for (let btn of btnList) {
  btn.addEventListener('click', onClick);
}

// category로 옷들 필터
function filtedListByCategory(text) {
  let cloList = [];
  cloList = clothes.filter((clo) => clo.category === text);
  return cloList;
}

// color로 옷들 필터
function filtedListByColor(text) {
  let cloList = [];
  cloList = clothes.filter((clo) => clo.color === text);
  return cloList;
}

// 버튼 클릭시 기존에 있던 li 제거
function clearUl() {
  while (ul.firstChild) ul.removeChild(ul.firstChild);
}

// 클릭시 li 생성해서 ul에 appendChild로 추가
function addLi(filtedList) {
  clearUl();
  filtedList.forEach((clo) => {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const img = document.createElement('img');
    selectImage(clo, img);
    ul.appendChild(div);
    div.appendChild(li);
    div.appendChild(img);
    li.innerHTML = `${clo.sex}, ${clo.size} size`;
  });
}

// 옷 이미지 찾아주기 함수
function selectImage(clo, img) {
  img.width = '24';
  img.height = '24';
  if (clo.category === 't' && clo.color === 'blue') {
    img.src = './imgs/blue_t.png';
  } else if (clo.category === 't' && clo.color === 'pink') {
    img.src = './imgs/pink_t.png';
  } else if (clo.category === 't' && clo.color === 'yellow') {
    img.src = './imgs/yellow_t.png';
  } else if (clo.category === 'p' && clo.color === 'blue') {
    img.src = './imgs/blue_p.png';
  } else if (clo.category === 'p' && clo.color === 'pink') {
    img.src = './imgs/pink_p.png';
  } else if (clo.category === 'p' && clo.color === 'yellow') {
    img.src = './imgs/yellow_p.png';
  } else if (clo.category === 's' && clo.color === 'blue') {
    img.src = './imgs/blue_s.png';
  } else if (clo.category === 's' && clo.color === 'pink') {
    img.src = './imgs/pink_s.png';
  } else if (clo.category === 's' && clo.color === 'yellow') {
    img.src = './imgs/yellow_s.png';
  }
}

// 이벤트객체 이용해서 버튼안에 text로 스위치문에 케이스별로 나누어서 함수 실행
function onClick(e) {
  const text = e.path[1].innerText.trim().toLowerCase();
  switch (text) {
    case 't':
      addLi(filtedListByCategory(text));
      break;
    case 'p':
      addLi(filtedListByCategory(text));
      break;
    case 's':
      addLi(filtedListByCategory(text));
      break;
    case 'blue':
      addLi(filtedListByColor(text));
      break;
    case 'yellow':
      clearUl();
      addLi(filtedListByColor(text));
      break;
    case 'pink':
      addLi(filtedListByColor(text));
      break;
  }
}
