import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 发送请求之前
  config.params = {
    ...config.params,
    appkey: 'gno_2_1546996803291'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
