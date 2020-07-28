const gameBtn = document.querySelector('.game__button');
const time = document.querySelector('.game__timer');
const counter = document.querySelector('.game__score');
const field = document.querySelector('.game__field');

const popup = document.querySelector('.pop-up');
const refreshBtn = document.querySelector('.pop-up__refresh');
const popupMsg = document.querySelector('.pop-up__message');

let state = true;
//left 0~90
//top 0~70
gameBtn.addEventListener('click', () => {
  if (state === true) {
    state = false;
    gameStart();
    gameBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  }
});

function imgGenerator() {
  let bugList = [];
  let carrotList = [];
  for (let i = 0; i < 10; i++) {
    const bug = document.createElement('img');
    const carrot = document.createElement('img');
    carrot.src = './carrot/img/carrot.png';
    bug.src = './carrot/img/bug.png';
    bug.setAttribute('class', 'bug');
    carrot.setAttribute('class', 'carrot');
    bug.style.left = `${Math.ceil(Math.random() * 90)}%`;
    bug.style.top = `${Math.ceil(Math.random() * 70)}%`;
    carrot.style.left = `${Math.ceil(Math.random() * 90)}%`;
    carrot.style.top = `${Math.ceil(Math.random() * 70)}%`;
    bugList.push(bug);
    carrotList.push(carrot);
  }
  return { bugList, carrotList };
}

function gameStart() {
  const { bugList, carrotList } = imgGenerator();
  bugList.forEach((v) => field.appendChild(v));
  carrotList.forEach((v) => field.appendChild(v));
}

field.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'carrot') {
    const carrots = document.querySelectorAll('.carrot');
    field.removeChild(e.target);
    counter.innerHTML = carrots.length - 1;
    if (carrots.length - 1 === 0) {
      state = true;
      showPopup(state);
    }
  } else if (e.target.classList[0] === 'bug') {
    state = false;
    showPopup(state);
  }
});

function showPopup(state) {
  if (state === false) {
    popupMsg.innerHTML = `You Lose💩`;
    popup.classList.toggle('pop-up--hide');
  } else if (state === true) {
    popupMsg.innerHTML = 'You Won';
    popup.classList.toggle('pop-up--hide');
  }
}

refreshBtn.addEventListener('click', () => {
  field.innerHTML = ``;
  state = false;
  gameStart();
  popup.classList.toggle('pop-up--hide');
});
