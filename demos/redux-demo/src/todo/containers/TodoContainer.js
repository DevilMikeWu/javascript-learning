import React from 'react';
import {
    connect
} from 'react-redux';
import TodoPanel from '../components/TodoPanel';
import { fetchAllTodos } from './../actions/TodoActions';



class TodoContainer extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchAllTodos());
        // console.log(fetchAllTodos);
    }
    render() {
        const { todos } = this.props;
        return (
            <TodoPanel
                todos={todos}
            />
        )
    }
}

const mapStateToProps = (state) => {
    const {
        todoReducer: { todos }
    } = state;
    return {
        todos
    }
}

export default connect(mapStateToProps)(TodoContainer);