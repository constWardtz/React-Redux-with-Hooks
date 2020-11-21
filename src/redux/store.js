import { createStore } from 'redux';

import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(rootReducer, composeWithDevTools())