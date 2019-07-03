import { combineReducers } from 'redux'
import { merge } from '../../services/object'

import * as actions from './actions'

export const initialState = {
  isFetching: false, items: [], error: null,
}

const userReducer = (state = {}, action) => {
  const { type, payload, meta = {} } = action
  const { id = null } = meta
  if (!id) {
    return state
  }
  switch (type) {
    case actions.USER_FETCH_REQUEST:
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

const reducer = combineReducers({
  byId: userReducer,
})

export default reducer
