import React from 'react'
import PropTypes from 'react-proptypes'

import styles from './Post.scss'

/* eslint-disable jsx-a11y/anchor-is-valid */

class Post extends React.Component {
  componentDidMount() {
    const { fetchPost, postId } = this.props
    fetchPost(postId)
  }
  render () {
    const { isLoading, post } = this.props
    if (typeof isLoading === 'undefined' || isLoading) {
      return <h1>Loading...</h1>
    }
    return (
      <div className={styles.postContainer}>
        <h1>Post: {post.title}</h1>
        <nav>
            <a href="#">Previous</a>
            Current: {post.id}
            <a href="#">Next</a>
        </nav>
        <p>{post.body}</p>
      </div>
    )
  }
}

Post.propTypes = {
  postId: PropTypes.string.isRequired,
}

export default Post