import React from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

import './style/App.scss';

const App = () => {
    return (
        <main className="container">
            <Header />
            <Body/>
            <Footer/>
        </main>
    )
};

const mapStateToProps = state => ({
    name: state.order.name
});

export default connect(mapStateToProps)(App);