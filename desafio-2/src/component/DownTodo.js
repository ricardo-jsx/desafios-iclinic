import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward';

const AscTodo = ({onClick}) => (
    <IconButton onTouchTap={onClick}>
        <DownArrow />
    </IconButton>
);

AscTodo.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AscTodo;