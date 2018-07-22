import React from 'react'
import { Link } from 'react-router-dom'

const UserPage = ({ match: { params : { userId } } }) => {
  return (
    <>
      <h1>{`User Page: ${userId}`}</h1>
      <Link to='/users'> >>Go to users page</Link>
    </>
  )
}

export default UserPage
