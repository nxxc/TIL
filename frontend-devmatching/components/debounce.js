export default function debounce(callbackFn, delay) {
  let check;

  return function () {
    if (check) {
      clearTimeout(check);
    }
    check = setTimeout(() => {
      callbackFn(...arguments);
    }, delay);
  };
}
