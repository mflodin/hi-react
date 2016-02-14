import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
    it('handles addTodo', () => {
        const initialState = {todos: []};
        const action = {type: "ADD_TODO", text: "New todo"};
        const nextState = reducer(initialState, action);
        expect(nextState).to.deep.equal({todos: [
            {
                id: 1,
                description: "New todo",
                completed: false
            }
        ]});
    });

    it('handles toggleTodo', () => {
        const initialState = {todos: [{
            id: 1,
            description: "Done",
            completed: false
        }]};
        const action = {type: "TOGGLE_TODO", id: 1};
        const nextState = reducer(initialState, action);
        expect(nextState).to.deep.equal({todos: [
            {
                id: 1,
                description: "Done",
                completed: true
            }
        ]})
    });

    it('can be used with reduce', () => {
        const actions = [
            {type: "ADD_TODO", text: "A todo"},
            {type: "ADD_TODO", text: "Another todo"},
            {type: "TOGGLE_TODO", id: 1},
            {type: "ADD_TODO", text: "A third todo"},
            {type: "TOGGLE_TODO", id: 3},
            {type: "TOGGLE_TODO", id: 3}
        ];

        const finalState = actions.reduce(reducer, {todos: []});

        expect(finalState).to.deep.equal({
            todos: [
                {
                    id: 1,
                    description: "A todo",
                    completed: true
                },
                {
                    id: 2,
                    description: "Another todo",
                    completed: false
                },
                {
                    id: 3,
                    description: "A third todo",
                    completed: false
                }
            ]
        })
    });
});