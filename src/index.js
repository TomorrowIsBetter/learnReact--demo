import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory} from 'react-router';
import RootRouter from './router/router';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';

let store = configureStore();

let { AppContainer } = require('react-hot-loader');


function renderApp () {
    if (process.env.NODE_ENV !== 'production') {
        ReactDOM.render(
            (
                <Provider store = {store}>
                    <Router history = {browserHistory} routes={RootRouter}/>
                </Provider>
            ), document.getElementById('page')
        );
    }
}
renderApp();

