import request from '@/requests/index.ts'

export function Login (data: object) {
  return request({
    url: 'login',
    method: 'post',
    data
  })
}

// list
export function GetStoreList () {
  return request({
    url: 'list/store',
    method: 'get'
  })
}

export function GetRiverBirdStoreList () {
  return request({
    url: 'list/store/riverBird',
    method: 'get'
  })
}


export function GetStaff () {
  return request({
    url: 'user',
    method: 'get'
  })
}

export function GetRiverBirdStore () {
  return request({
    url: 'store/riverBird',
    method: 'get'
  })
}

export function GetFullOrderDiscount () {
  return request({
    url: 'fullOrderDiscount',
    method: 'get'
  })
}


