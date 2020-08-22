import Recommendation from './components/recommendation.js';

const $keyword = document.querySelector('.keyword');
const $keywords = document.querySelector('.keywords');
const $searchResults = document.querySelector('.search-results');

const url = window.location.href;

$keyword.addEventListener('keyup', async (e) => {
  const { value } = e.target;
  const { key } = e;
  const recom = new Recommendation(value, key);
  recom.showLi();
  recom.render();
});
