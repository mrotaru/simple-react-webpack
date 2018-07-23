import React from 'react'
import { Route } from 'react-router-dom'

import UsersPage from './UsersPage'
import UserPage from './UserPage'

export const Routes = () => (
  <>
    <Route path="/users" component={UsersPage} exact />
    <Route path="/users/:userId" component={UserPage} />
  </>
)
