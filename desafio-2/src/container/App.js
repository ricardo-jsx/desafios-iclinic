import React from 'react';
import Paper from 'material-ui/Paper'
import {connect} from 'react-redux';

import Header from './Header';
import Body from './Body';

import './style/App.scss';

const style = {
    width: 500,
    margin: 20,
    flex: 1,
};

const App = () => {
    return (
        <div className="fill-screen">
            <Paper style={style} zDepth={3}>
                <Header/>
                <Body/>
                <div style={{flex: 1, backgroundColor: 'purple'}}></div>
            </Paper>
        </div>
    )
};

const mapStateToProps = state => ({
    name: state.order.name
});

export default connect(mapStateToProps)(App);