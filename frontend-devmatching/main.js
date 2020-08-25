export const $keyword = document.querySelector('.keyword');
export const $keywords = document.querySelector('.keywords');
export const $searchResults = document.querySelector('.search-results');

import debounce from './components/debounce.js';
import Keywords from './components/keywords.js';
import Results from './components/searchResults.js';

const keyCodes = Object.freeze({
  arrowUp: 38,
  arrowDown: 40,
  Enter: 13,
});

class App {
  constructor() {
    this.key = '';
    this.value = '';

    this.isOpen = false;

    this.Recom = new Keywords();
    this.Results = new Results();
  }

  toggleIsOpen = () => (this.isOpen = !this.isOpen);

  onArrowKeyPress = (e) => {
    if (e.keyCode === 38) {
      console.log('up');
    } else if (e.keyCode === 40) {
      console.log('down');
    }
  };

  onEnterkeyPress = () => {
    this.Results.showLoading().fetchData(this.value).makeHtml().render();
  };

  onKeypress = () => {
    if (this.isOpen) this.Recom.showKeywords();
    this.value !== '' &&
      this.Recom.showLoading()
        .fetchData(this.value)
        .makeHtml()
        .showKeywords()
        .render();
  };

  handleKeypress = (e) => {
    const { keyCode } = e;
    this.key = e.key;
    this.value = e.target.value;
    switch (keyCode) {
      case keyCodes.arrowUp:
      case keyCodes.arrowDown:
        this.onArrowKeyPress();
        break;
      case keyCodes.Enter:
        this.onEnterkeyPress();
      default:
        this.onKeypress();
    }
  };
}
const Cats = new App();
$keyword.addEventListener('keyup', debounce(Cats.handleKeypress, 200));

$keyword.addEventListener('blur', () => {
  Cats.Recom.hideKeywords();
});
$keywords.addEventListener('click', (e) => {
  $keyword.value = e.target.innerText;
});
