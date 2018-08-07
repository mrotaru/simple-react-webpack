import React from 'react'
import PropTypes from 'react-proptypes'
import { Link } from 'react-router-dom'

const UsersList = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>{users.map(user => <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
      </li>)}</ul>
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsersList
