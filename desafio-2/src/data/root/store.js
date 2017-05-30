import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import {loadState, saveState} from './localStorage';
import reducer from './reducer';


const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;