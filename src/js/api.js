import axios from 'axios';

const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';

function requestToTheServer(request, value, category, limit, time, area, ingredient,) {
  const options = {
    params: {
      page: value,
      limit: limit,
      q: request,
    },
  };

  return axios.get(`${BASE_URL}`, options).then(response => response.data);
}