import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducer/reducer';
import createLogger from 'redux-logger';

const finalCreateStore = compose(
    applyMiddleware(thunk, createLogger)
)(createStore);

export default function configureStore (initialState) {
    let store = finalCreateStore(RootReducer, initialState);
    if (module.hot) { // hot module is enabled
        module.hot.accept('../reducer/reducer', () => {
            const nextRootReducer = require('../reducer/reducer');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}