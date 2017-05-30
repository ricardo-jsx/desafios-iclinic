import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

const AscTodo = ({onClick, children}) => (
    <IconButton onTouchTap={onClick}>
        {children}
    </IconButton>
);

AscTodo.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AscTodo;