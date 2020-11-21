import { combineReducers } from 'redux';

import shoppingReducer from './shopping/shoppingReducer'

const rootReducer = combineReducers({
    shop: shoppingReducer
})

export default rootReducer;