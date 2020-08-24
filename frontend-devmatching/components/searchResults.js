const $keyword = document.querySelector('.keyword');
const $keywords = document.querySelector('.keywords');
const $searchResults = document.querySelector('.search-results');

const recommendationURL = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=`;
const catsURL = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=`;
const url = window.location.href;

const baseURL = document.location.pathname;

export default class Results {
  constructor() {
    this.url = catsURL;
    this.$searchResults = document.querySelector('.search-results');
    this.data = '';
    this.html = '';
  }

  fetchData = (value) => {
    console.log(baseURL);
    this.data = fetch(this.url + value).then((res) => res.json());
    window.location.href = `${baseURL}?q=${value}`;

    return this;
  };

  makeHtml = () => {
    this.html = this.data.then((results) => {
      const { data } = results;
      return data.map((v) => `<img src=${v.url}></img>`).join('');
    });
    return this;
  };

  showLoading = () => {
    this.$searchResults.innerHTML = `<span>loading....<span>`;
    return this;
  };
  render = async () => {
    await this.html.then((res) => (this.$searchResults.innerHTML = res));

    return this;
  };
}
