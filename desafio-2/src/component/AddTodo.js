import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddTodo = ({onClick}) => (
    <IconButton onTouchTap={onClick}>
        <ContentAdd />
    </IconButton>
);

AddTodo.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AddTodo;