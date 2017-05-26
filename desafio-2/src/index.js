import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './data/root/store';
import App from './container/App';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept('./container/App', () => {
        const NextApp = require("./container/App").default;

        ReactDOM.render(
            <Provider store={store}>
                <NextApp/>
            </Provider>, document.getElementById('app')
        );
    });
}