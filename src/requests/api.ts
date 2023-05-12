import request from '@/requests/index.ts'

export function Login (data: object) {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}

// list
export function GetStore () {
  return request({
    url: 'list/store',
    method: 'get'
  })
}

export function GetRiverBirdStore () {
  return request({
    url: 'list/store/riverBird',
    method: 'get'
  })
}