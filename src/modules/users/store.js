export const USER_FETCH_START = 'USER_FETCH_START'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

const reducer = (state = { fetching: false, users: [] }, action) => {
  const { type, payload, error, meta } = action
  switch (type) {
    case USER_FETCH_START:
      return {
        ...state,
        users: {
          ...state.users,
          [payload.userId]: {
            isFetching: true,
          }
        }
      }
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          [payload.userId]: {
            isFetching: false,
            user: payload,
          }
        }
      }
    case USER_FETCH_FAILURE:
      return {
        ...state,
        users: {
          ...state.users,
          [payload.userId]: {
            isFetching: false,
            error: true,
            errorMessage: payload,
          }
        }
      }
    default: {
      return {}
    }
  }
}

export const fetchUser = userId => ({
  type: USER_FETCH_START,
  payload: {
    userId
  }
})

export { reducer }
