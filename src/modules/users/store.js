import { combineReducers } from 'redux'
import merge from 'lodash.merge'
import get from 'lodash.get'

export const USER_FETCH_START = 'USER_FETCH_START'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

const userReducer = (state = {}, action) => {
  const { type, payload, meta = {} } = action
  const { id = null } = meta
  if (!id) {
    return state
  }
  switch (type) {
    case USER_FETCH_START:
      return merge({}, state, {
        [id]: { meta: { isFetching: true } },
      })
    case USER_FETCH_SUCCESS:
      return merge({}, state, {
        [id]: {
          meta: { isFetching: false },
          payload,
        },
      })
    case USER_FETCH_FAILURE:
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

export const fetchUserStart = userId => ({
  type: USER_FETCH_START,
  meta: { id: userId },
})

export const fetchUserSuccess = (userId, payload) => ({
  type: USER_FETCH_SUCCESS,
  payload,
  meta: { id: userId },
  error: false,
})

export const fetchUserFailure = (userId, payload) => ({
  type: USER_FETCH_FAILURE,
  payload,
  meta: { id: userId },
  error: true,
})

export const fetchUser = userId => async dispatch => {
  try {
    dispatch(fetchUserStart(userId))
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const responseBody = await response.json()
    dispatch(fetchUserSuccess(userId, responseBody))
  } catch (error) {
    dispatch(fetchUserFailure(userId, error))
  }
}

export const selectUser = (state, userId) => get(state, `users.byId.${userId}.payload`)
export const selectUserIsFetching = (state, userId) => get(state, `users.byId.${userId}.meta.isFetching`)
export const selectUserError = (state, userId) => get(state, `users.byId.${userId}.error`)

export const USERS_FETCH_START = 'USERS_FETCH_START'
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS'
export const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE'

const usersReducer = (
  state = { default: { isFetching: false, items: [], error: null } },
  action,
) => {
  const { type, payload = {} } = action
  switch (type) {
    case USERS_FETCH_START:
      return merge({}, state, {
        default: { isFetching: true },
      })
    case USERS_FETCH_SUCCESS:
      return merge({}, state, {
        default: {
          isFetching: false,
          items: payload,
        },
      })
    case USERS_FETCH_FAILURE:
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

const fetchUsersStart = () => ({
  type: USERS_FETCH_START,
})

const fetchUsersSuccess = payload => ({
  type: USERS_FETCH_SUCCESS,
  payload,
})

const fetchUsersFailure = payload => ({
  type: USERS_FETCH_FAILURE,
  error: true,
  payload,
})

export const selectUsers = state => state.users.list.default.items
export const selectUsersFetching = state => state.users.list.default.isFetching
export const selectUsersError = state => state.users.list.default.error

export const fetchUsers = () => async dispatch => {
  try {
    dispatch(fetchUsersStart())
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const responseBody = await response.json()
    dispatch(fetchUsersSuccess(responseBody))
  } catch (error) {
    dispatch(fetchUsersFailure(error))
  }
}

const reducer = combineReducers({
  byId: userReducer,
  list: usersReducer,
})

export { reducer }
