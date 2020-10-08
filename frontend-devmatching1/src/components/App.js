import ToggleBtn from './ToggleBtn.js';
import SearchInput from './SearchInput.js';
import SearchResult from './SearchResults.js';
import ImageInfo from './ImageInfo.js';
import api from '../utils/api.js';

console.log('app is running!');

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    this.toggleBtn = new ToggleBtn({
      onClick: () => {
        document.querySelector('body').classList.toggle('night');
      },
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: (keyword) => {
        api.fetchCats(keyword).then(({ data }) => {
          this.setState(data);
          // console.log(data);
        });
      },
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: (image) => {
        this.imageInfo.setState({
          visible: true,
          image,
        });
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: this.data,
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }
}
