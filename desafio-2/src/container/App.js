import React from 'react';
import Paper from 'material-ui/Paper'
import {connect} from 'react-redux';

import Header from './Header';
import Body from './Body';

import './style/App.scss';

const App = () => {
    return (
        <main className="container">
            <Header/>
            <Body/>
            <div style={{backgroundColor: 'purple', padding: '30px'}}>Footer</div>
        </main>
    )
};

const mapStateToProps = state => ({
    name: state.order.name
});

export default connect(mapStateToProps)(App);