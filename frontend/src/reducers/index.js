import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import user from './user'

const rootReducer = combineReducers({
  user,
  router: routerReducer,
  form: reduxFormReducer,
})

export default rootReducer
