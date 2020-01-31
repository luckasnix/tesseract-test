import * as devsTypes from './types'

// Ação que cria a lista de desenvolvedores
export function createDevList(list) {
  return {
    type: devsTypes.CREATE_DEV_LIST,
    payload: { list }
  }
}