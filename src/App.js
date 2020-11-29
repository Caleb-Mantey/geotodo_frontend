import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Navbar  from './component/navbar'
import TodoList from './component/todo-list';
import AddTodo from './component/add-todo';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <AddTodo/>
              </Col>
              <Col>
                <TodoList/>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
    </div>
  );
}

export default App;
