const url = 'https://yts.mx/api/v2/list_movies.json';

async function ax() {
  const res = await axios.get(url);
  console.log(res.data);
}

ax();
