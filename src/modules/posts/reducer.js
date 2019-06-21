import { combineReducers } from 'redux'
import { merge } from '../../services/object'

import * as actions from './actions'

export const initialState = {
  isFetching: false, items: [], error: null,
}

const postsReducer = (state = initialState, action) => {
  const { type, payload = {} } = action
  switch (type) {
    case actions.POSTS_FETCH_REQUEST:
      return merge({}, state, {
        isFetching: true,
      })
    case actions.POSTS_FETCH_SUCCESS:
      return merge({}, state, {
        isFetching: false,
        items: payload,
      })
    case actions.POSTS_FETCH_FAILURE:
      return merge({}, state, {
        isFetching: false,
        items: [],
        error: payload,
      })
    default: {
      return state
    }
  }
}

const postReducer = (state = {}, action) => {
  const { type, payload, meta = {} } = action
  const { id = null } = meta
  if (!id) {
    return state
  }
  switch (type) {
    case actions.POST_FETCH_REQUEST:
      return merge({}, state, {
        [id]: { meta: { isFetching: true } },
      })
    case actions.POST_FETCH_SUCCESS:
      return merge({}, state, {
        [id]: {
          meta: { isFetching: false },
          payload,
        },
      })
    case actions.POST_FETCH_FAILURE:
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
  byId: postReducer,
  all: postsReducer,
})

export default reducer
