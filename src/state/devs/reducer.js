import * as devsTypes from './types'

function reducer(_, action) {
  switch (action.type) {
    case devsTypes.CREATE_DEV_LIST:
      return action.payload.list
    default:
      throw new Error('Invalid action!')
  }
}

export default reducer