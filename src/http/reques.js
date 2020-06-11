// 引入axios
import axios from 'axios'

const Server = axios.create({
  baseURL: 'https://www.liulongbin.top:8888/api/private/v1',
  timeout: 3000
})
// 请求拦截器
Server.interceptors.request.use(config => {
  return config
}, _error => {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('请求出错')
})
// 响应拦截器
Server.interceptors.response.use(res => {
  if (res.status === 200) {
    return res.data
  }
}, error => {
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('出错啦', error)
})

export default Server
