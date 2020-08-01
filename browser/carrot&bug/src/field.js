'use strict';
import * as sound from './sound.js';

const carrotSize = 80;

export const ItemType = Object.freeze({
  carrot: 'carrot',
  bug: 'bug',
});
export class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.filedRect = this.field.getBoundingClientRect();
    this.field.addEventListener('click', this.onClick);
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }
  init() {
    this.field.innerHTML = ``;
    this._addItem(ItemType.bug, this.carrotCount, './carrot/img/bug.png');
    this._addItem(ItemType.carrot, this.bugCount, './carrot/img/carrot.png');
  }

  _addItem(className, count, imgPath) {
    for (let i = 0; i < count; i++) {
      const img = document.createElement('img');
      const x1 = 0;
      const y1 = 0;
      const x2 = this.filedRect.width - carrotSize;
      const y2 = this.filedRect.height - carrotSize;
      img.setAttribute('class', className);
      img.setAttribute('src', imgPath);
      img.style.position = 'absolute';
      img.style.left = `${randomNumber(x1, x2)}px`;
      img.style.top = `${randomNumber(y1, y2)}px`;
      this.field.appendChild(img);
    }
  }

  onClick = (e) => {
    const target = e.target;
    if (target.matches('.carrot')) {
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick(ItemType.carrot);
    } else if (target.matches('.bug')) {
      this.onItemClick && this.onItemClick(ItemType.bug);
    }
  };
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
