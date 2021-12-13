import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '22a1a53e65msh12dff73ef3b9523p1e38f6jsnc03dd8b4f6a5',
    },
  })

  return data
}
