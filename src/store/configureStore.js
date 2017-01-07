import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createLogger from 'redux-logger'
import reducer from './test-reducer'
import bootstrap from './bootstrap'

const logger = createLogger()
const middlewares = [logger]
const enhancers = [ applyMiddleware(...middlewares) ]
const composedEnhancer = composeWithDevTools(...enhancers)

const initialState = bootstrap()
const store = createStore(reducer, initialState, composedEnhancer)

export default store
