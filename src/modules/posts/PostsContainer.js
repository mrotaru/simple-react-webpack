import { connect } from 'react-redux'

import Posts from './Posts'

import { fetchPosts } from './actions'
import {
  selectPosts,
  selectIsFetchingPosts,
  selectPostsError,
} from './selectors'

const mapStateToProps = (state) => {
  return {
    loading: selectIsFetchingPosts(state),
    posts: selectPosts(state),
    error: selectPostsError(state),
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts)