import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import reducer from './reducer';

const store = createStore(reducer,
    compose(
        applyMiddleware(logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;