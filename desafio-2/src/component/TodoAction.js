import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

const DeleteTodo = ({onClick, children}) => (
    <IconButton onTouchTap={onClick}>
        {children}
    </IconButton>
);

DeleteTodo.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default DeleteTodo;