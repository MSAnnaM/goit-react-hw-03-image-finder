import axios from 'axios';

const KEY = '39839283-62cdbd8a7b0319b381c75b0de';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImage(q, page) {
  return await axios
    .get(
      `?key=${KEY}&q=${q}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
    )
    .then(response => {return response.data.hits});
}
