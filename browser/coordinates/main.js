const vertical = document.querySelector('.vertical');
const horizon = document.querySelector('.horizon');
const coordinates = document.querySelector('.coordinates');
const image = document.querySelector('.image');

document.addEventListener('mousemove', (e) => {
  vertical.style.left = `${e.clientX}px`;
  horizon.style.top = `${e.clientY}px`;
  coordinates.innerHTML = `${e.clientX}px , ${e.clientY}px`;
  coordinates.style.left = `${e.clientX}px`;
  coordinates.style.top = `${e.clientY}px`;
  image.style.left = `${e.clientX}px`;
  image.style.top = `${e.clientY}px`;
});
