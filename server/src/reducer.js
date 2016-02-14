import {addTodo, toggleTodo, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TODO":
            return addTodo(state, action.text);
        case "TOGGLE_TODO":
            return toggleTodo(state, action.id);
        default:
            return state;
    }
}