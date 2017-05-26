import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';

const DeleteTodo = ({onClick}) => (
    <IconButton onTouchTap={onClick}>
        <Delete />
    </IconButton>
);

DeleteTodo.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default DeleteTodo;