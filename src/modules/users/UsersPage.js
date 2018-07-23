import React from 'react'
import { Link } from 'react-router-dom'

const UsersPage = () => (
  <div>
    <h1>Users Page</h1>
    <Link to="/users/foo">Go to 'foo' user</Link>
  </div>
)

export default UsersPage
