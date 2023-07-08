import axios from "axios"

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (search, page) => {
      const response = await axios.get('', {
        params: {
            q: search,
            key: '30372139-17e231f0453b63e760e856e5b',
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            per_page: 12,
            page: page
        }
      })
      return response.data.hits      
}
