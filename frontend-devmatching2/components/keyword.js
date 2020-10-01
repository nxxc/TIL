const $keyword = document.querySelector('.keyword');
const $keywords = document.querySelector('.keywords');
const $searchResults = document.querySelector('.search-results');

const recommendationURL = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=`;
const catsURL = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=`;
const url = window.location.href;
