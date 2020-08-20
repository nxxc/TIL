"use strict";

var url = 'https://yts.mx/api/v2/list_movies.json';
var contents = document.querySelector('.contents');

function ax() {
  var _ref, data, articles;

  return regeneratorRuntime.async(function ax$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get(url).then(function (res) {
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
          console.log(articles.join(''));
          contents.innerHTML += articles.join('');
          console.log(data);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

ax();