export const $keyword = document.querySelector('.keyword');
export const $keywords = document.querySelector('.keywords');
export const $searchResults = document.querySelector('.search-results');

import debounce from './components/debounce.js';
import Keywords from './components/keywords.js';
import { recommendationURL } from './components/data.js';

const Recom = new Keywords();
class App {
  constructor() {
    this.key = '';
    this.value = '';
    this.isOpen = false;
  }

  toggleIsOpen = () => (this.isOpen = !this.isOpen);

  onKeypress = (e) => {
    if (this.isOpen) Recom.showKeywords();
    this.key = e.key;
    this.value = e.target.value;
    this.value !== '' &&
      Recom.fetchData(this.value).makeHtml().showKeywords().render();
  };
}
const Cats = new App();
$keyword.addEventListener('keyup', debounce(Cats.onKeypress, 200));
$keywords.addEventListener('click', (e) => {
  $keyword.value = e.target.innerText;
});
$keyword.addEventListener('keydown', (e) => {
  if (e.keyCode === 38) {
    console.log('up');
    console.dir($keywords.childNodes[0].onblur);
  } else if (e.keyCode === 40) {
    console.log('down');
  }
});

$keyword.addEventListener('blur', () => {
  Recom.hideKeywords();
});
$keyword.addEventListener('focus', (e) => {
  Cats.onKeypress(e);
});
