export default class Results {
  constructor() {
    this.$searchResults = document.querySelector('.search-results');
    this.catsURL = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=`;
    this.baseURL = document.location.pathname;
    this.data = '';
    this.html = '';
  }

  fetchData = (value) => {
    this.data = fetch(this.catsURL + value).then((res) => res.json());
    history.pushState('', '', `${this.baseURL}?q=${value}`);

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
