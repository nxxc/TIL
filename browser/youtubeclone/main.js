const url = 'https://yts.mx/api/v2/list_movies.json';

const contents = document.querySelector('.contents');

async function ax(n) {
  const { data } = await axios
    .get(url, {
      params: {
        page: n,
      },
    })
    .then((res) => res.data);
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

  contents.innerHTML += articles.join('');
}

const options = {
  root: document.querySelector('.contents'), // .container class를 가진 엘리먼트를 root로 설정. null일 경우 브라우저 viewport
  rootMargin: '10px', // rootMargin을 '10px 10px 10px 10px'로 설정
  threshold: [0, 0.5, 1], // 타겟 엘리먼트가 교차영역에 진입했을 때, 교차영역에 타켓 엘리먼트의 50%가 있을 때, 교차 영역에 타켓 엘리먼트의 100%가 있을 때 observe가 반응한다.
};

// IntersectionObserver 생성
const io = new IntersectionObserver((entries, observer) => {
  // IntersectionObserverEntry 객체 리스트와 observer 본인(self)를 받음
  // 동작을 원하는 것 작성
  entries.forEach((entry) => {
    // entry와 observer 출력
    console.log('entry:', entry);
    console.log('observer:', observer);
  });
}, options);

ax(1);
