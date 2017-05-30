import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import {showAll, showCompleted} from '../data/visibility/action';

import './style/Footer.scss'

const Footer = ({handleViewAll, handleViewCompleted}) => {

    return (
        <div className="footer">
            <RaisedButton
                label="Ver Todos"
                className="footer__action"
                onTouchTap={handleViewAll}
                primary={true}
            />

            <RaisedButton
                label="Ver Completos"
                className="footer__action"
                onTouchTap={handleViewCompleted}
                primary={true}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        handleViewAll: () => dispatch(showAll()),
        handleViewCompleted: () => dispatch(showCompleted()),
    }
};

export default connect(null, mapDispatchToProps)(Footer);