import requet from './reques'

// 登录接口
export function login (info) {
  return requet({
    url: '/login',
    method: 'post',
    data: info
  })
}
export function getlist (info) {
  return requet({
    url: '/login',
    method: 'post',
    data: info
  })
}
