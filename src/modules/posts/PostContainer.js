import { connect } from 'react-redux'

import { fetchPost } from './actions'
import { selectPost, selectIsFetchingPost } from './selectors'
import Post from './Post'

const mapStateToProps = (state, { match: { params: { postId } } }) => ({
  postId,
  post: selectPost(state, postId),
  isLoading: selectIsFetchingPost(state, postId),
})

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId))
})

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer
