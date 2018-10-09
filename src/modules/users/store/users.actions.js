export const USERS_FETCH_START = 'USERS_FETCH_START'
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS'
export const USERS_FETCH_FAILURE = 'USERS_FETCH_FAILURE'

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
