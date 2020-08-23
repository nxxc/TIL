export default class Keywords {
  constructor(key, value) {
    this.keywords = document.querySelector('.keywords');
    this.url = `https://jf3iw5iguk.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=`;
    this.html = '';
    this.data = '';
  }
  //
  showKeywords = () => {
    this.keywords.style.display = 'block';
    return this;
  };

  hideKeywords = () => {
    this.keywords.style.display = 'none';
    return this;
  };

  fetchData = (value) => {
    if (value !== '') {
      this.data = fetch(this.url + value).then((res) => res.json());
    }
    return this;
  };

  makeHtml = () => {
    this.html = this.data.then((results) =>
      results.map((res) => `<li>${res}</li>`).join('')
    );
    return this;
  };

  render = async () => {
    await this.html.then((res) => (this.keywords.innerHTML = res));
    return this;
  };
}
