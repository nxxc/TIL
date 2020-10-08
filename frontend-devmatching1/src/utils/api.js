const API_ENDPOINT =
  'https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev';

const api = {
  fetchCats: async (keyword) => {
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
      if (res.status === 200) {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getCatInfo: async (id) => {
    if (!id) return;
    try {
      const res = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
      console.log(res.status);
      if (res.status === 200) {
        const data = await res.json();
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
