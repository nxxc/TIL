import SearchInput from './SearchInput.js';

export default class App {
  constructor(target) {
    this.$target = target;
    this.data = [];
    this.searchInput = new SearchInput(this);
  }
}
