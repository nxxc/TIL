import PopUp from './popup.js';
import Game from './game.js';

const CARROT_SIZE = 5;
const BUG_SIZE = 5;
const GAME_DURATION_SEC = 5;

const gameFinishBanner = new PopUp();
const game = new Game(GAME_DURATION_SEC, CARROT_SIZE, BUG_SIZE);

game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case 'cancel':
      message = 'Replay ❓';
      break;
    case 'win':
      message = 'You Won 😀';
      break;
    case 'lose':
      message = 'You Lose 💩';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
