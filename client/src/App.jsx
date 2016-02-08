import React, { Component } from 'react';
import {Router} from 'react-router';
import TodoList from './components/TodoList';
import ToolBar from './components/ToolBar';
import Footer from './components/Footer';
import './css/reset.css';
import './css/styles.css';

const todos = [
  {
    id: 0,
    description: 'Eat food',
    completed: true
  },
  {
    id: 1,
    description: 'Learn react',
    completed: false
  },
  {
    id: 2,
    description: 'Go home',
    completed: false
  }
];
let todoIndex = todos.length + 1;;




export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };

    todoIndex = this.state.todos.length;
  }

  toggleTodo(todoId) {
    console.log(todoId);
    let todos = this.state.todos
        .map(todo => {
          if(todo.id !== todoId) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed
          }
        });
    this.setState({todos});
  }

  addTodo(description) {
    var todos = [...this.state.todos, {
      id: todoIndex++,
      description,
      completed: false
    }];
    this.setState({todos});
  }

  render() {
    const filter = this.props.params.filter || "ALL";
    return (
        <div>
          <ToolBar onAddTodo={this.addTodo.bind(this)}></ToolBar>
          <TodoList todos={this.state.todos} filter={filter.toUpperCase()}
                    onToggleTodo={this.toggleTodo.bind(this)}>

          </TodoList>
          <Footer></Footer>
        </div>
    );
  }
}
