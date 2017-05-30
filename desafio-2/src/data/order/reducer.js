import {ORDER_ASC, ORDER_DESC} from './action';

const initialState = {
    asc: true,
    desc: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ORDER_ASC:
            return {...state, asc: true, desc: false};

        case ORDER_DESC:
            return {...state, asc: false, desc: true};
    }

    return state;
}