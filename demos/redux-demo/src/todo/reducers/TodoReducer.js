import initState from './initState';
import type from './../actions/ActionTypes';

export default function (state = initState, action) {
    switch (action.type) {
        case type.FETCH_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case type.ADD_TODO:
            return {
                ...state,
                todos: state.todos.push(action.todo)
            }
        case type.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todo.id).push(action.todo)
            }
        case type.FILTER_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.name.indexOf(action.name) >= 0)
            }
        default:
            return state;
    }

}