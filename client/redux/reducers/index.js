import login from './login';
import register from './register';
import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    login,
    register,
    routing: routerReducer
})