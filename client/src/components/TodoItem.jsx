import React, { Component } from 'react';

export default class TodoItem extends Component {
    render() {
        const {todo, onToggleTodo} = this.props;
        return (
            <li onClick={onToggleTodo.bind(this, todo.id)}
                className={todo.completed ? "done" : ""}>
                    {todo.description}
            </li>
        );
    }
}