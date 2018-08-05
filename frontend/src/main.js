import "@babel/polyfill"
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import UserIndex from './containers/UserListContainer'
import UserShow from './containers/UserDetailContainer'
import UserNew from './components/UserNewModal'
import configureStore from './store'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Header from './components/Header';


const {store, history} = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history} >
      <div className='container'>
        <Header />
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

