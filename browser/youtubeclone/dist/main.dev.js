"use strict";

var url = 'https://yts.mx/api/v2/list_movies.json';

function ax() {
  var res;
  return regeneratorRuntime.async(function ax$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get(url));

        case 2:
          res = _context.sent;
          console.log(res.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

ax();