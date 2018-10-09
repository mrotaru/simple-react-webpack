import * as actions from './user.actions'
import merge from 'lodash.merge'

const reducer = (state = {}, action) => {
  const { type, payload, meta = {} } = action
  const { id = null } = meta
  if (!id) {
    return state
  }
  switch (type) {
    case actions.USER_FETCH_START:
      return merge({}, state, {
        [id]: { meta: { isFetching: true } },
      })
    case actions.USER_FETCH_SUCCESS:
      return merge({}, state, {
        [id]: {
          meta: { isFetching: false },
          payload,
        },
      })
    case actions.USER_FETCH_FAILURE:
      return merge({}, state, {
        [id]: {
          meta: { isFetching: false },
          error: true,
          payload,
        },
      })
    default: {
      return state
    }
  }
}

export default reducer
