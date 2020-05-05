import request from '@/utils/request'

export function getType3Question (req) {
  return request({
    url: 'getExercisesByType',
    method: 'get',
    params: req
  })
}
export function getPersonAssInfo (req) { // 获取人格测试题型
  return request({
    url: '/getExercisesByType',
    method: 'get',
    params: req
  })
}
export function postPersonResult (req) { // 提交人格测试结果
  return request({
    url: '/bigFive/submitEvaluate',
    method: 'post',
    params: req
  })
}
export function postType3Answer (req) {
  return request({
    url: 'submitEvaluate',
    method: 'post',
    params: req
    // contentType: 'application/json; charset=utf-8',
    // // contentType: 'application/x-www-form-urlencoded',
    // // data: req
    // data: [JSON.stringify(req)],
    // dataType: 'json'
  })
}
