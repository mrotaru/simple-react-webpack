import React from 'react'
import PropTypes from 'react-proptypes'

import styles from './User.scss'

class User extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props
    fetchUser(userId)
  }
  render () {
    const { isLoading, user } = this.props
    if (typeof isLoading === 'undefined' || isLoading) {
      return <h1>Loading...</h1>
    }
    return (
      <div className={styles.userContainer}>
        <h1>User: {user.name}</h1>
        <h4>Address: {user.address}</h4>
      </div>
    )
  }
}

User.propTypes = {
  userId: PropTypes.string.isRequired,
}

export default User