import axios from '@/axios.js'

var api = {
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  search (params) {
    return axios.get('/api/meituan/header/search.json', params)
  }
}

export default api
