import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import guitarReducer from './reducers/guitars'

const middlewares = compose(applyMiddleware(logger,thunk))

const reducers = combineReducers({
    guitarReducer
})

export default createStore(reducers,middlewares)