import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <ul className="todo-list">
            {this.props.todos
                .filter(todo => {
                    switch (this.props.filter) {
                        case 'COMPLETED':
                            return todo.completed;
                        case 'ACTIVE':
                            return !todo.completed;
                        default:
                            return true;
                    }
                })
                .map(todo => {
                return <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleTodo={this.props.onToggleTodo}
                />
            })}
            </ul>
        );
    }
}