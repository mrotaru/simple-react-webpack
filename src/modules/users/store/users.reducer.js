import * as actions from './users.actions'
import merge from 'lodash.merge'

export const initialState = {
  default: { isFetching: false, items: [], error: null },
}

const reducer = (state = initialState, action) => {
  const { type, payload = {} } = action
  switch (type) {
    case actions.USERS_FETCH_START:
      return merge({}, state, {
        default: { isFetching: true },
      })
    case actions.USERS_FETCH_SUCCESS:
      return merge({}, state, {
        default: {
          isFetching: false,
          items: payload,
        },
      })
    case actions.USERS_FETCH_FAILURE:
      return merge({}, state, {
        default: {
          isFetching: false,
          items: [],
          error: payload,
        },
      })
    default: {
      return state
    }
  }
}

export default reducer
