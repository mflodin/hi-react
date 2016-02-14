let index = 0;

export const INITIAL_STATE = {
    todos: [
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
    ]
};

export function addTodo(state, description) {
    console.log("Adding todo: ", description);
    const lastTodo = state.todos[state.todos.length - 1] || {id: 0};
    return {...state, todos: [...state.todos, {
        id: lastTodo.id + 1,
        description: description,
        completed: false
    }]};
}

export function toggleTodo(state, todoId) {
    console.log('Toggling todo', todoId);
    return {...state,
        todos: state.todos
        .map(todo => {
            if(todo.id !== todoId) {
                return todo;
            }
            return {
                ...todo,
                completed: !todo.completed
            }
        })};
}