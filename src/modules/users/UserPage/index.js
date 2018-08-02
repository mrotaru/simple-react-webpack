import React from 'react'
import { Link } from 'react-router-dom'
import { UserContainer } from '../User'

import style from './style.scss'

const UserPage = ({
  match: {
    params: { userId },
  },
}) => {
  return (
    <div class={style.userDiv}>
      <UserContainer userId={userId} />
      <Link to="/users"> >>Go to users page</Link>
    </div>
  )
}

export default UserPage
