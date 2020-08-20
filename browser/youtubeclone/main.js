const url = 'https://yts.mx/api/v2/list_movies.json';

const contents = document.querySelector('.contents');

async function ax() {
  const { data } = await axios.get(url).then((res) => res.data);
  const articles = await data.movies.map((movie) => {
    const article = `
      <article>
          <img src="${movie.medium_cover_image}" alt="">
          <span class='title'>${movie.title}</span>
          <span class='summary'>${movie.summary}</span>
          <span class='rating'>⭐️${movie.rating}</span>
       </article>
      `;
    return article;
  });
  console.log(articles.join(''));
  contents.innerHTML += articles.join('');
  console.log(data);
}

ax();
