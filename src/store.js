import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers'

const middleware = [] // Add your middlewares here !
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const preloadedState = {} // You can set your initial state

const store = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middleware)),
)

export default store
