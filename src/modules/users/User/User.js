import React from 'react'
import PropTypes from 'react-proptypes'

class User extends React.Component {
  componentWillMount() {
    const { fetchUser, userId } = this.props
    fetchUser(userId)
  }
  render () {
    return (
      <div>
        <h1>User {userId}</h1>
      </div>
    )
  }
}

User.propTypes = {
  userId: PropTypes.string.isRequired,
}

export default User
