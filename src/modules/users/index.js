import React from 'react'
import { Route } from 'react-router-dom'

import UsersPage from './UsersPage'
import UserPage from './UserPage'

const routes = ({ match }) => (
  <React.Fragment>
    <Route path={`${match.path}`} component={UsersPage} exact />
    <Route path={`${match.path}/:userId`} component={UserPage} />
  </React.Fragment>
)

export { routes }
