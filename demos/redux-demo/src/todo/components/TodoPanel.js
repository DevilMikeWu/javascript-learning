import React from 'react';
import {
    Panel,
    Row, Col, Jumbotron
} from 'react-bootstrap';
import Todos from './Todos';

class TodoPanel extends React.Component {
    render() {
        const {todos} = this.props;
        console.log(todos);
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Hello, Todo Panel</h1>
                    <p>
                        Welcome to todo Panel, here you can create your todo list for your daily work.
                     </p>
                </Jumbotron>
                <Row className="show-grid">
                    <Col xs={6} md={4}>
                    </Col>
                    <Col xs={6} md={4}>
                        <Panel bsStyle="primary">
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">ToDo Panel</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <Todos todos={todos} />
                            </Panel.Body>
                        </Panel>
                    </Col>
                    <Col xsHidden md={4}>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default TodoPanel;