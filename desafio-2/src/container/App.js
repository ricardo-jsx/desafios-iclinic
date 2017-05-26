import React from 'react';
import {connect} from 'react-redux'

import './style/App.scss';

const App = ({name}) => {
    return (
        <div className="fill-screen">
            <div>
                <h1>Hello {name}</h1>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    name: state.order.name
});

export default connect(mapStateToProps)(App);