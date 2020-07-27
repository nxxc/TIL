const gameBtn = document.querySelector('.game__button');
const time = document.querySelector('.game__timer');
const counter = document.querySelector('.game__score');
const field = document.querySelector('.game__field');

const popup = document.querySelector('.pop-up');
const refreshBtn = document.querySelector('.pop-up__refresh');
const popupMsg = document.querySelector('.pop-up__message');

//left 0~90
//top 0~70
let bugList = [];
let carrotList = [];
function imgGenerator() {
  for (let i = 0; i < 10; i++) {
    const bug = document.createElement('img');
    const carrot = document.createElement('img');
    carrot.src = './carrot/img/carrot.png';
    bug.setAttribute('class', 'bug');
    carrot.setAttribute('class', 'carrot');
    bug.src = './carrot/img/bug.png';
    bug.style.left = `${Math.ceil(Math.random() * 90)}%`;
    bug.style.top = `${Math.ceil(Math.random() * 70)}%`;
    carrot.style.left = `${Math.ceil(Math.random() * 90)}%`;
    carrot.style.top = `${Math.ceil(Math.random() * 70)}%`;
    field.appendChild(bug);
    field.appendChild(carrot);
    carrotList.push(carrot);
  }
}
num = 10;
field.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'carrot') {
    field.removeChild(e.target);
    num--;
    counter.innerHTML = num;
  } else if (e.target.classList[0] === 'bug') {
    alert('Bye!');
  }
});

imgGenerator();
