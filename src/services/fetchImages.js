import axios from "axios"


axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.params = {
//   key: '30372139-17e231f0453b63e760e856e5b',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page: 40,
// }

export const fetchImages = async (search, page = 1) => {
      const response = await axios.get('', {
        params: {
            q: search,
            key: '30372139-17e231f0453b63e760e856e5b',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 40,
            page: page
        }
      })
      console.log('response >>', response.data)
      return response.data.hits
}
