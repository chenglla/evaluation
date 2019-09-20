import axios from 'axios'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://58.119.112.12/evaluate/evaluate', // api的base_url
  timeout: 50000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  config['headers']['Content-Type'] = 'application/x-www-form-urlencoded'
  if (config.method === 'POST' || config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  Promise.reject(error)
  console.info(error)
})

export default service
