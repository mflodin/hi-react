import React, { Component } from 'react';
import {Router} from 'react-router';
import io from 'socket.io-client';
import TodoList from './components/TodoList';
import ToolBar from './components/ToolBar';
import Footer from './components/Footer';
import './css/reset.css';
import './css/styles.css';


//const socket = io('http://hi-react-server.herokuapp.com/');
const socket = io('http://localhost:8000');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    socket.on('state', state => this.setState(state));

  }

  toggleTodo(todoId) {
    const action =
        {
            type: "TOGGLE_TODO",
            id: todoId
        };

    socket.emit('action', action);
  }

  addTodo(description) {
      const action =
      {
          type: "ADD_TODO",
          text: description
      };

      socket.emit('action', action);
  }

  render() {
    const filter = (this.props.params.filter || "ALL").toUpperCase();
    return (
        <div>
          <ToolBar onAddTodo={this.addTodo.bind(this)}></ToolBar>
          <TodoList todos={this.state.todos} filter={filter}
                    onToggleTodo={this.toggleTodo.bind(this)}>

          </TodoList>
          <Footer filter={filter}></Footer>
        </div>
    );
  }
}
