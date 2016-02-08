import React, {Component} from 'react';

export default class ToolBar extends Component {
    addTodo() {
        const value = this.refs.todoText.value;
        if(value) {
            this.props.onAddTodo(value);
            this.refs.todoText.value = "";
        }
    }
    render() {
        return (
            <div className="toolbar">
                <input ref="todoText" />
                <button onClick={this.addTodo.bind(this)}>
                    Add todo
                </button>
            </div>
    )}
}