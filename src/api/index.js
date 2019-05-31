import axios from '@/axios.js'

var api = {
  searchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  search () {
    return axios.get('/api/meituan/header/search.json')
  },
  menuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  goodsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  hotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  recentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getProvince () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}

export default api
