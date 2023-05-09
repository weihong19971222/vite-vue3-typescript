import request from '@/requests/index.ts'

export function Login (data: object) {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}