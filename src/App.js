import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import HomePage from './components/HomePage'
import NotFoundPage from './components/NotFoundPage'
import ErrorBoundary from './components/ErrorBoundary'
import PostsRoutes from './modules/posts/routes'
import configureStore from './store'
import Api from './services/api'

import style from './style.css'

const api = Object.create(Api)
api.setConfig({ baseUrl: 'https://jsonplaceholder.typicode.com' })
const store = configureStore({}, { api })

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <div class={style.main}>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/posts" component={PostsRoutes} />
                <Route component={NotFoundPage} />
              </Switch>
            </BrowserRouter>
          </div>
        </Provider>
      </ErrorBoundary>
    )
  }
}

export default App
