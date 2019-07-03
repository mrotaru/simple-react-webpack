export const USER_FETCH_REQUEST = 'USER_FETCH_REQUEST'
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS'
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE'

export const fetchUserStart = postId => ({
  type: USER_FETCH_REQUEST,
  meta: { id: postId },
})

export const fetchUserSuccess = (postId, payload) => ({
  type: USER_FETCH_SUCCESS,
  payload,
  meta: { id: postId },
  error: false,
})

export const fetchUserFailure = (postId, payload) => ({
  type: USER_FETCH_FAILURE,
  payload,
  meta: { id: postId },
  error: true,
})

export const fetchPost = userId => async (dispatch, getState, { api })  => {
  try {
    dispatch(fetchUserStart(userId))
    const response = await api.request({
      endpoint: `/users/${userId}`
    })
    dispatch(fetchUserSuccess(userId, response))
  } catch (error) {
    dispatch(fetchUserFailure(userId, error))
  }
}