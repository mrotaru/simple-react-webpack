export const USER_FETCH_START = 'USER_FETCH_START'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

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
