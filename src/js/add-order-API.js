import axios from 'axios';

export async function addFetch(data) {
  const URL = 'https://tasty-treats-backend.p.goit.global/api/orders';

  return await axios
    .post(URL, data)

    .catch(function (error) {
      console.dir(`${error.response.data.message}, try again later`);
    });
}
