import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App name="John" />, document.getElementById('app'));

if(module.hot) module.hot.accept();