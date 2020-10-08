export default class ToggleBtn {
  constructor({ onClick }) {
    const $toggleBtn = document.createElement('button');
    this.$toggleBtn = $toggleBtn;
    this.$toggleBtn.innerHTML = `Toggle DarkMode`;
    this.$toggleBtn.onclick = onClick;

    document.querySelector('body').appendChild($toggleBtn);
  }
}
