import {SHOW_COMPLETED, SHOW_ALL} from './action';

const initialState = {
    completed: false,
    all: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_COMPLETED:
            return {...state, completed: true, all: false};
        case SHOW_ALL:
            return {...state, completed: false, all: true};
    }

    return state;
};