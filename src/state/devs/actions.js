import * as devsTypes from './types'

export function createDevList(list) {
  return {
    type: devsTypes.CREATE_DEV_LIST,
    payload: { list }
  }
}