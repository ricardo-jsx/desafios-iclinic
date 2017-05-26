import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';

const AscTodo = ({onClick}) => (
    <IconButton onTouchTap={onClick}>
        <UpArrow />
    </IconButton>
);

AscTodo.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AscTodo;