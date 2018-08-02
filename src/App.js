import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import { routes as UsersRoutes } from './modules/users'
import configureStore from './store'

import style from './style.css'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <div class={style.main}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <UsersRoutes />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
