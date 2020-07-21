const vertical = document.querySelector('.vertical');
const horizon = document.querySelector('.horizon');
const coordinates = document.querySelector('.coordinates');
const image = document.querySelector('.image');

addEventListener('load', () => {
  const imageRect = image.getBoundingClientRect();
  const imageHalfWidth = imageRect.width / 2;
  const imageHalfHeight = imageRect.height / 2;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizon.style.transform = `translateY(${y}px)`;

    image.style.transform = `translate(${x - imageHalfWidth}px, ${
      y - imageHalfHeight
    }px)`;

    coordinates.style.transform = `translate(${x}px, ${y}px)`;

    coordinates.innerHTML = `${x}px , ${y}px`;
  });
});

//모든 리소스가 받아진 후에 이미지 크기 받아와서
//transform 활용해서 성능개선
