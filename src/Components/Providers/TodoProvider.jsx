import React, { createContext, useContext, useReducer } from 'react';

const todoContext = createContext(null);

const initialTodos = {
    todos: [
        {
            id: '0',
            title: 'Water the plants.',
            desc: 'Water the plants early in the morning, it helps refresh you as well as the plants.',
            tags: ['plants', 'environment'],
            alloted: 5,
            createdAt: Date.now()
        },
        {
            id: '1',
            title: 'Water the plants.',
            desc: 'Water the plants early in the morning, it helps refresh you as well as the plants.',
            tags: ['trees', 'globe'],
            alloted: 5,
            createdAt: Date.now()
        },
        {
            id: '2',
            title: 'Water the plants.',
            desc: 'Water the plants early in the morning, it helps refresh you as well as the plants.',
            tags: ['plants', 'environment'],
            alloted: 5,
            createdAt: Date.now()
        },
        {
            id: '3',
            title: 'Water the plants.',
            desc: 'Water the plants early in the morning, it helps refresh you as well as the plants.',
            tags: ['trees', 'globe'],
            alloted: 5,
            createdAt: Date.now()
        },
        {
            id: '4',
            title: 'Water the plants.',
            desc: 'Water the plants early in the morning, it helps refresh you as well as the plants.',
            tags: ['plants', 'environment'],
            alloted: 5,
            createdAt: Date.now()
        },
        {
            id: '5',
            title: 'Water the plants.',
            desc: 'Water the plants early in the morning, it helps refresh you as well as the plants.',
            tags: ['trees', 'globe'],
            alloted: 5,
            createdAt: Date.now()
        },
        {
            id: '6',
            title: 'Water the plants.',
            desc: 'Water the plants early in the morning, it helps refresh you as well as the plants.',
            tags: ['plants', 'environment'],
            alloted: 5,
            createdAt: Date.now()
        }
    ]
}

const reducer = ( state, { type, payload } ) => {
    switch(type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case 'UPDATE_TODO':
            let idx = state.todos.map((todo, idx) => [todo.id === payload[0], idx] ).filter(item => item[0] !== false)[0][1];
            state.todos[idx] = {...state.todos[idx], id: payload[1].id, title: payload[1].title, desc: payload[1].desc, tags: payload[1].tags, alloted: payload[1].alloted };
            return state;
        default:
            return state;
    }
}

const TodoProvider = ({ children }) => {
    const [ todos, dispatch ] = useReducer(reducer, initialTodos);

    return (
        <todoContext.Provider value={{ todos, dispatch }} >
            { children }
        </todoContext.Provider>
    )
}

const useTodos = () => useContext(todoContext);

export{
    TodoProvider,
    useTodos
};