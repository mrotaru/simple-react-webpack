import React from 'react'
import PropTypes from 'react-proptypes'

class User extends React.Component {
  componentWillMount() {
    const { fetchUser, userId } = this.props
    fetchUser(userId)
  }
  render () {
    const { isLoading, user } = this.props
    if (typeof isLoading === 'undefined' || isLoading) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <h1>User: {user.name}</h1>
      </div>
    )
  }
}

User.propTypes = {
  userId: PropTypes.string.isRequired,
}

export default User
