import uuid from 'uuid';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './action';

const initialState = [{
    id: '376jd8-ajs7jdhs-27dhdus7',
    time: 1495765131323,
    text: 'Buy Milk',
    completed: false
}];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const id = uuid.v4();
            const time = new Date().getTime();

            return [...state, {id, time, text: action.payload, completed: false}];

        case REMOVE_TODO:
            const filteredState = state.filter(todo => todo.id !== action.payload);

            return filteredState;

        case TOGGLE_TODO:
            const todoRows = action.payload;

            const mappedState = state.map(todo => {
                //See if the current to do is in the list of visible to dos
                const row = todoRows.find(row => row.id === todo.id);

                if (row) return row;

                return todo;
            });

            return mappedState;
    }

    return state;
}