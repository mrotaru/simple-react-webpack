import React from 'react'
import PropTypes from 'react-proptypes'

const UsersList = ({ users }) => {
  console.log('u', users)
  return (
    <div>
      <h1>Users</h1>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsersList
