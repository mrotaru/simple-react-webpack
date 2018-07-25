import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.scss'

const UserPage = ({
  match: {
    params: { userId },
  },
}) => {
  return (
    <div class={style.userDiv}>
      <h1>{`User Page: ${userId}`}</h1>
      <Link to="/users"> >>Go to users page</Link>
    </div>
  )
}

export default UserPage
