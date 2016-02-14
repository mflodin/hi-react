import {addTodo, toggleTodo} from '../src/core';
import {expect} from 'chai';

describe('core', () => {

    describe('add todo', () => {
        it('adds a todo to the state', () => {
            const state = {todos: [{
                id: 1,
                description: "A todo",
                completed: false
            }]};
            Object.freeze(state);
            const nextState = addTodo(state, "New todo");

            expect(nextState).to.deep.equal({
                todos: [
                    {
                        id: 1,
                        description: "A todo",
                        completed: false
                    },
                    {
                        id: 2,
                        description: "New todo",
                        completed: false
                    }
                ]
            })
        })
    });


    describe('toggle todo', () => {
        it('toggles a todo by id', () => {
            const state = {todos: [
                {
                    id: 1,
                    description: "A todo",
                    completed: true
                },
                {
                    id: 2,
                    description: "New todo",
                    completed: false
                }
            ]};
            Object.freeze(state);
            const nextState = toggleTodo(state, 1);
            const finalState = toggleTodo(nextState, 2);

            expect(finalState).to.deep.equal({
                todos: [
                    {
                        id: 1,
                        description: "A todo",
                        completed: false
                    },
                    {
                        id: 2,
                        description: "New todo",
                        completed: true
                    }
                ]
            })

        })

    });
});
