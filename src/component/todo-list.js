import Axios from "axios";
import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  UncontrolledCollapse,
  Button,
  CardBody,
  Card,
  InputGroup,
  InputGroupAddon,
  Input,
} from "reactstrap";
import TodoListItem from "./todo-list-item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TodoList extends Component {
  constructor() {
    super();
  }

  state = {
    todos: [],
  };

  getTodos() {
    Axios.get("http://localhost:5500/api/todos/")
      .then((res) => {
        this.setState({
          todos: res.data,
        });
        console.log(res);
        console.log(this.state.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteTodo(id) {
    Axios.delete(`http://localhost:5500/api/todos/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  udpdateTodo(id, title) {
    Axios.put("http://localhost:5500/api/todos/", { title: title, id: id })
      .then((res) => {
        console.log(res);
        this.notify();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  notify() {
    toast("Todo Updated Successfully!");
  }

  componentDidMount() {
    this.getTodos();
  }

  componentWillUpdate() {
    this.getTodos();
  }
  //

  render() {
    return (
      <div>
        <ToastContainer />
        <h1>Todo List Item</h1>
        <ListGroup>
          {this.state.todos.length > 0
            ? this.state.todos.map((item) => {
                return (
                  <TodoListItem
                    key={item.id}
                    item={item}
                    onDelete={this.deleteTodo}
                    onUpdate={this.udpdateTodo}
                  />
                );
              })
            : null}
        </ListGroup>
      </div>
    );
  }
}

export default TodoList;
