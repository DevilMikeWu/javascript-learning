import type from './ActionTypes';

export function addTodo(todo) {
    return {
        type: type.ADD_TODO,
        todo
    }
}

export function removeTodo(id) {
    return {
        type: type.ADD_TODO,
        id
    }
}


export function updateTodo(todo) {
    return {
        type: type.ADD_TODO,
        todo
    }
}

export function fetchTodos(todos) {
    return {
        type: type.FETCH_TODOS,
        todos
    }
}

export function filterTodos(name) {
    return {
        type: type.FETCH_TODOS,
        name
    }
}

export function fetchAllTodos() {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    return (dispatch) => {
        dispatch(fetchTodos(JSON.parse(todos)));
    }
}