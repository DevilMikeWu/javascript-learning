import {
    combineReducers
} from 'redux';

import todoReducer from './TodoReducer';

const todoApp = combineReducers({
    todoReducer
});

export default todoApp;