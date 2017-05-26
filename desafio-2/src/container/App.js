import React from 'react';
import {connect} from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

import './style/App.scss';

const App = ({name}) => {
    return (
        <div className="fill-screen">
            <div>
                <RaisedButton label="Default"/>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    name: state.order.name
});

export default connect(mapStateToProps)(App);