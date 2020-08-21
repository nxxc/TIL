"use strict";

var url = 'https://yts.mx/api/v2/list_movies.json';
var contents = document.querySelector('.contents');

function ax(n) {
  var _ref, data, articles;

  return regeneratorRuntime.async(function ax$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get(url, {
            params: {
              page: n
            }
          }).then(function (res) {
            return res.data;
          }));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          _context.next = 6;
          return regeneratorRuntime.awrap(data.movies.map(function (movie) {
            var article = "\n      <article>\n          <img src=\"".concat(movie.medium_cover_image, "\" alt=\"\">\n          <span class='title'>").concat(movie.title, "</span>\n          <span class='summary'>").concat(movie.summary, "</span>\n          <span class='rating'>\u2B50\uFE0F").concat(movie.rating, "</span>\n       </article>\n      ");
            return article;
          }));

        case 6:
          articles = _context.sent;
          contents.innerHTML += articles.join('');

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

var options = {
  root: document.querySelector('.contents'),
  // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
  rootMargin: '10px',
  // rootMargin을 '10px 10px 10px 10px'로 설정
  threshold: [0, 0.5, 1] // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.

}; // IntersectionObserver 생성

var io = new IntersectionObserver(function (entries, observer) {
  // IntersectionObserverEntry 객체 리스트와 observer 본인(self)를 받음
  // 동작을 원하는 것 작성
  entries.forEach(function (entry) {
    // entry와 observer 출력
    console.log('entry:', entry);
    console.log('observer:', observer);
  });
}, options);
ax(1);