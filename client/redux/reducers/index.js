import login from './login';
import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    login,
    routing: routerReducer
})