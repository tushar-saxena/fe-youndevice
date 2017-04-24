import {render} from 'react-dom'
import Main from './components/main'
import App from './components/App'
import Home from './components/home'
import store from './redux/store/config'
import React from 'react'
import cookie from 'react-cookie';

import "./common/styles/app.less";
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store);

function redirectToLogin(store) {
    return (nextState, replace) => {
        if (!cookie.load('loginToken')) {
            replace({
                pathname: '/login'
            });
        }
    };
}


render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Main}/>
                    <Route path="/login" component={Main}/>
                    <Route path="/home" onEnter={redirectToLogin(store)} component={Home}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root')
);

