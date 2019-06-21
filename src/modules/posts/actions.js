export const POSTS_FETCH_REQUEST = 'POSTS_FETCH_REQUEST'
export const POSTS_FETCH_SUCCESS = 'POSTS_FETCH_SUCCESS'
export const POSTS_FETCH_FAILURE = 'POSTS_FETCH_FAILURE'

const fetchPostsRequest = () => ({
  type: POSTS_FETCH_REQUEST,
})

const fetchPostsSuccess = payload => ({
  type: POSTS_FETCH_SUCCESS,
  payload,
})

const fetchPostsFailure = payload => ({
  type: POSTS_FETCH_FAILURE,
  error: true,
  payload,
})

export const fetchPosts = () => async (dispatch, getState, { api })  => {
  try {
    dispatch(fetchPostsRequest())
    const response = await api.request({
      endpoint: '/posts'
    })
    dispatch(fetchPostsSuccess(response))
  } catch (error) {
    dispatch(fetchPostsFailure(error))
  }
}

export const POST_FETCH_REQUEST = 'POST_FETCH_REQUEST'
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS'
export const POST_FETCH_FAILURE = 'POST_FETCH_FAILURE'

export const fetchPostStart = postId => ({
  type: POST_FETCH_REQUEST,
  meta: { id: postId },
})

export const fetchPostSuccess = (postId, payload) => ({
  type: POST_FETCH_SUCCESS,
  payload,
  meta: { id: postId },
  error: false,
})

export const fetchPostFailure = (postId, payload) => ({
  type: POST_FETCH_FAILURE,
  payload,
  meta: { id: postId },
  error: true,
})

export const fetchPost = postId => async (dispatch, getState, { api })  => {
  try {
    dispatch(fetchPostStart(postId))
    const response = await api.request({
      endpoint: `/posts/${postId}`
    })
    dispatch(fetchPostSuccess(postId, response))
  } catch (error) {
    dispatch(fetchPostFailure(postId, error))
  }
}