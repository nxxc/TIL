'use strict';
import { Field, ItemType } from './field.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
  win: 'win',
  cancel: 'cancel',
  lose: 'lose',
});
export default class GameBuilder {
  gameDuration(duration) {
    this.gameDuration = duration;
    return this;
  }

  carrotCount(num) {
    this.carrotCount = num;
    return this;
  }

  bugCount(num) {
    this.bugCount = num;
    return this;
  }

  build() {
    return new Game(this.gameDuration, this.carrotCount, this.bugCount);
  }
}
class Game {
  constructor(gameDuration, carrotCount, bugCount) {
    this.gameDuration = gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');
    this.gameBtn = document.querySelector('.game__button');
    this.gameBtn.addEventListener('click', () => {
      if (this.started) {
        this.stop(Reason.cancel);
      } else {
        this.start();
      }
    });

    this.gameField = new Field(carrotCount, bugCount);
    this.gameField.setClickListener(this.onItmeClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }

  setGameStopListener(onGameStop) {
    this.onGameStop = onGameStop;
  }

  start() {
    this.started = true;
    this.initGame();
    this.showTimeAndScore();
    this.startGameTimer();
    this.showStopButton();
    sound.playBg();
  }
  stop(reason) {
    this.started = false;
    this.stopGameTimer();
    this.hideStopButton();
    sound.stopBg();
    this.onGameStop && this.onGameStop(reason);
  }

  onItmeClick = (item) => {
    if (!this.started) {
      return;
    }
    if (item === ItemType.carrot) {
      this.score++;
      this.updateScoreText(this.score);
      if (this.score === this.carrotCount) {
        this.stop(Reason.win);
      }
    } else if (item === ItemType.bug) {
      this.stop(Reason.lose);
    }
  };
  hideStopButton() {
    this.gameBtn.style.visibility = 'hidden';
  }
  stopGameTimer() {
    clearInterval(this.timer);
  }

  startGameTimer() {
    let remainingTimeSec = this.gameDuration;
    this.updateTimeText(remainingTimeSec);
    this.timer = setInterval(() => {
      if (remainingTimeSec <= 0) {
        clearInterval(this.timer);
        this.finish(this.carrotCount === this.score ? Reason.win : Reason.lose);
        return;
      }
      this.updateTimeText(--remainingTimeSec);
    }, 1000);
  }

  updateTimeText(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`;
  }

  updateScoreText(score) {
    this.gameScore.innerText = this.carrotCount - score;
  }

  showStopButton() {
    const icon = this.gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    this.gameBtn.style.visibility = 'visible';
  }

  showTimeAndScore() {
    this.gameScore.style.visibility = 'visible';
    this.gameTimer.style.visibility = 'visible';
  }

  initGame() {
    this.gameField.init();
    this.score = 0;
    this.gameScore.innerText = this.carrotCount;
  }
}
