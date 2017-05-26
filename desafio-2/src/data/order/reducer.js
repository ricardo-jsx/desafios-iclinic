import {SET_NEWEST, SET_OLDEST} from './action';

const initialState = {
    newest: true,
    oldest: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWEST:
            return {...state, newest: true, oldest: false};

        case SET_OLDEST:
            return {...state, newest: false, oldest: true};
    }

    return state;
}