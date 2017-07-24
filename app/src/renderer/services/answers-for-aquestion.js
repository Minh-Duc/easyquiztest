import Promise from 'bluebird'
import {
  QuestionService
} from './question'

const questionSrv = new QuestionService()
const pathEntity = '/api/AnswersForAQuestions'
const co = Promise.coroutine

import _ from 'lodash'
export class AnswersForAQuestionService {
  getAll = co(function* () {
    let ret = yield axios.get(pathEntity)
    return ret.data
  })
  getBy = co(function* (id) {
    let ret = yield axios.get(`${pathEntity}/${id}`)
    return ret.data
  })
  save = co(function* (bindingEntity) {
    let ret = yield axios.post(`${pathEntity}/replaceOrCreate`, bindingEntity)
    return ret.data
  })
  remove = co(function* (id) {
    let ret = yield axios.delete(`${pathEntity}/${id}`)
    return ret.data
  })

}