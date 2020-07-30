import PopUp from './popup.js';
import Field from './field.js';
import * as sound from './sound.js';
// const field = document.querySelector('.game__field');
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');

// const popUp = document.querySelector('.pop-up');
// const popUpMsg = document.querySelector('.pop-up__message');
// const popUpRefresh = document.querySelector('.pop-up__refresh');

// const carrotSound = new Audio('./carrot/sound/carrot_pull.mp3');
// const alertSound = new Audio('./carrot/sound/alert.wav');
// const bgSound = new Audio('./carrot/sound/bg.mp3');
// const bugSound = new Audio('./carrot/sound/bug_pull.mp3');
// const winSound = new Audio('./carrot/sound/game_win.mp3');

// const filedSize = field.getBoundingClientRect();
const CARROT_SIZE = 5;
const BUG_SIZE = 5;
const GAME_DURATION_SEC = 5;
// const carrotSize = 80;

let started = false;
let score = 0;
let timer = undefined;

const gameFinishBanner = new PopUp();

gameFinishBanner.setClickListener(() => {
  gameStart();
});

gameBtn.addEventListener('click', () => {
  if (started) {
    gameStop();
  } else {
    gameStart();
  }
});

// popUpRefresh.addEventListener('click', () => {
//   gameStart();
//   hidePopUp();
// });

const gameField = new Field(CARROT_SIZE, BUG_SIZE);
gameField.setClickListener(onItmeClick);

function onItmeClick(item) {
  if (!started) {
    return;
  }

  if (item === 'carrot') {
    console.log(1);
    score++;
    updateScoreText(score);
    if (score === CARROT_SIZE) {
      finishGame(true);
    }
  } else if (item === 'bug') {
    finishGame(false);
  }
}
// field.addEventListener('click', onFieldClick);

function gameStart() {
  started = true;
  initGame();
  showTimeAndScore();
  startGameTimer();
  showStopButton();
  sound.playBg();
}
function gameStop() {
  started = false;
  stopGameTimer();
  hideStopButton();
  // showPopUpWithMsg('REPLAY❓');
  gameFinishBanner.showWithText('REPLAY❓');
  sound.playAlert();
  sound.stopBg();
}
function finishGame(win) {
  started = false;
  hideStopButton();
  if (win) {
    sound.playWin();
  } else {
    sound.playBug();
  }
  stopGameTimer();
  sound.stopBg();
  // showPopUpWithMsg(win ? 'YOU WON!' : 'YOU LOST');
  gameFinishBanner.showWithText(win ? 'YOU WON!' : 'YOU LOST');
}

function hideStopButton() {
  gameBtn.style.visibility = 'hidden';
}

// function showPopUpWithMsg(text) {
//   popUpMsg.innerText = text;
//   popUp.classList.remove('pop-up--hide');
// }

// function hidePopUp() {
//   popUp.classList.add('pop-up--hide');
// }

function stopGameTimer() {
  clearInterval(timer);
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimeText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(timer);
      finishGame(CARROT_SIZE === score);
      return;
    }
    updateTimeText(--remainingTimeSec);
  }, 1000);
}

function updateTimeText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function updateScoreText(score) {
  gameScore.innerText = CARROT_SIZE - score;
}

function showStopButton() {
  const icon = gameBtn.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
  gameBtn.style.visibility = 'visible';
}

function showTimeAndScore() {
  gameScore.style.visibility = 'visible';
  gameTimer.style.visibility = 'visible';
}

function initGame() {
  gameField.init();
  score = 0;
  gameScore.innerText = CARROT_SIZE;
}

// function addItem(className, count, imgPath) {
//   for (let i = 0; i < count; i++) {
//     const img = document.createElement('img');
//     const x1 = 0;
//     const y1 = 0;
//     const x2 = filedSize.width - carrotSize;
//     const y2 = filedSize.height - carrotSize;
//     img.setAttribute('class', className);
//     img.setAttribute('src', imgPath);
//     img.style.position = 'absolute';
//     img.style.left = `${randomNumber(x1, x2)}px`;
//     img.style.top = `${randomNumber(y1, y2)}px`;
//     field.appendChild(img);
//   }
// }

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function playSound(sound) {
//   sound.currentTime = 0;
//   sound.play();
// }

// function stopSound(sound) {
//   sound.pause();
// }
