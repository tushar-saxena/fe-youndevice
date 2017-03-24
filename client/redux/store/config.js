import { createStore, applyMiddleware, compose} from 'redux'
import combineReducer from '../reducers/index'
import {logger, crashReporter, thunk} from '../middlewares/index'

    
const store = createStore(combineReducer, {}, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
 
export default store;