import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import { Routes as UsersRoutes } from './modules/users'

import './style.css'

const App = () => {
  return (
    <div class='main'>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <UsersRoutes />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
