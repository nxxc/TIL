const $keyword = document.querySelector('.keyword');
const $keywords = document.querySelector('.keywords');
const $searchResults = document.querySelector('.search-results');

const recommendationURL = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=`;
const catsURL = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=`;

export default class Recommendation {
  constructor(value, key) {
    this.loading = true;
    this.isOpen = false;
    this.value = value;
    this.key = key;
    this.html = '';
  }

  // 리스트반환하는 api
  onFetch = async () => {
    if (this.value === '') return;
    else {
      const data = await fetch(
        `${recommendationURL}${this.value}`
      ).then((res) => res.json());
      this.setLoading(false);
      return data;
    }
  };
  //
  makeHtml = () => {
    const data = this.onFetch();
    data.then((results) => {
      if (!results) return;
      else {
        this.html = results.map((res) => `<li>${res}</li>`).join('');
      }
    });
  };

  showLi = () => {
    $keywords.style.display = 'block';
  };

  hideLi = () => {
    $keywords.style.display = 'none';
  };

  setLoading = (bool) => {
    this.loading = bool;
  };

  showLoading = () => {
    return `Loading.....`;
  };

  render = async () => {
    console.log(this);
    this.makeHtml();
    console.log(this);
    if (this.loading) {
      $keywords.innerHTML = this.showLoading();
    }

    if (!this.loading) {
      $keywords.innerHTML = this.html;
    }
  };
}
