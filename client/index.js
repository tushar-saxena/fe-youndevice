import {render} from 'react-dom'
import Main from './components/main'
import App from './components/App'
import Home from './components/home'
import store from './redux/store/config'
import React from 'react'
import "./common/styles/app.less";
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
const history = syncHistoryWithStore(browserHistory, store)


render(
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Main}/>

                    <Route path="/login" component={Main}/>
                    <Route path="/home" component={Home}/>
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root')
);

