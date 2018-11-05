import React from 'react';
import ReactDOM from 'react-dom';
import {
    Provider
} from 'react-redux';
import {
    createStore, applyMiddleware
} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import rootReducer from './todo/reducers/rootReducer';

/**
 * add bootstrap css 
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import TodoContainer from './todo/containers/TodoContainer';
import * as serviceWorker from './serviceWorker';

const logger = createLogger({
  // ...options
});

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
    <Provider store={store}>
        <TodoContainer />
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();