const timer = document.querySelector('.timer');
const counter = document.querySelector('.couter');
const popup = document.querySelector('popup');
const bottom = document.querySelector('.bottom');

const isPlaying = true; //게임 시작하면 true 정지 false

//랜덤하게 위치 지정해서 만들기
//위치는 left: 0~95% top: 0~85%
function bugsGenerator() {
  const bug = document.createElement('img');
  bug.setAttribute('src', './carrot/img/bug.png');
  bug.style.left = '95%';
  bug.style.top = '80%';
  bottom.appendChild(bug);
}
bugsGenerator();
function carrotsGenerator() {}

function randumNumberGenerator() {
  const left = Array(10)
    .fill(0)
    .map((v) => Math.ceil(Math.random() * 96));

  const top = Array(10)
    .fill(0)
    .map((v) => Math.ceil(Math.random() * 86));
  return { left, top };
}
console.log(randumNumberGenerator());

//당근이나 벌레 클릭하는 함수
//이벤트 위임해서 해야할 듯
function onClick() {}

bottom.addEventListener('click', (e) => {
  console.log(e.target);
});
