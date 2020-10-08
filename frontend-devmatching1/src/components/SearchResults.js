import api from '../utils/api.js';

export default class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement('section');
    this.$searchResult.className = 'SearchResult';
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;
    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$searchResult.innerHTML = this.data
      .map(
        (cat, idx) => `
          <article class="item">
            <img src=${cat.url} alt=${cat.name} data-id =${idx} data-infoId=${cat.id}/>
          </article>
        `
      )
      .join('');

    // this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
    //   $item.addEventListener("click", () => {
    //     this.onClick(this.data[index]);
    //   });
    // }
    this.$searchResult.addEventListener('click', async (e) => {
      e.preventDefault();
      console.log(e.target);
      if (e.target.tagName === 'ARTICLE') {
        console.log(e.target);
        console.log('이벤트 발생!');
        const { id, infoId } = await e.target.dataset;
        const catInfo = await api.getCatInfo(infoId);
        await this.onClick(this.data[id]);
      }
      const image = {
        ...this.data[id],
        origin,
        temperament,
        name,
      };
    });
  }
}
