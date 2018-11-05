import React from 'react';
import {
    ListGroupItem, Checkbox,Glyphicon
} from 'react-bootstrap';

class TodoItem extends React.Component {
    render() {
        const { todo } = this.props;
        return (
            <ListGroupItem>
                <div className="todo_item">
                    <div className='name'>
                        {todo.name}
                    </div>
                    <div className='action'>
                        <Checkbox checked onChange={()=>{}}></Checkbox>
                        <Glyphicon glyph="trash" />
                    </div>

                </div>
            </ListGroupItem>
        )
    }
}

export default TodoItem;