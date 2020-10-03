export default class SearchInput {
  constructor(target) {
    this.$target = target;
    console.log(target);
  }
  render() {
    console.log('SearchInput created', this.$target);
  }
}
