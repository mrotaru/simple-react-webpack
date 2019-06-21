import React from 'react'
import { Route } from 'react-router-dom'

import PostsContainer from './PostsContainer'
import PostContainer from './PostContainer'

const routes = ({ match }) => (
  <React.Fragment>
    <Route path={`${match.path}`} component={PostsContainer} exact />
    <Route path={`${match.path}/:postId`} component={PostContainer} />
  </React.Fragment>
)

export default routes