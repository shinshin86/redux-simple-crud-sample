import "@babel/polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import UserIndex from './components/UserIndex'
import UserShow from './components/UserShow'
import UserNew from './components/UserNew'
import configureStore from './store'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'


const {store, history} = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div>
        <Switch>
          <Route exact path="/" component={UserIndex} />
          <Route path="/users" component={UserIndex} />
          <Route path="/user/new" component={UserNew} />
          <Route path="/user/:id" component={UserShow} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

