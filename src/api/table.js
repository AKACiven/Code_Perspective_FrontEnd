import request from '@/utils/request'

export function checkResult(params) {
  return request({
    url: '/checkResult',
    method: 'get',
    params
  })
}
