import React from 'react';
import {
    ListGroup
} from 'react-bootstrap';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    render() {
        const {todos} = this.props;
        return (
            <ListGroup>
                {
                    todos && todos.map(todo => {
                        return <TodoItem key={todo.id} todo={todo} />
                    })
                }
            </ListGroup>
        )
    }
}

export default Todos;