import request from '@/utils/request'

export function getType3Question (req) {
  return request({
    url: 'getExercisesByType',
    method: 'get',
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
