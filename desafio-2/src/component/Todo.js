import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';

import TodoAction from './TodoAction';
import Divider from 'material-ui/Divider';

import './style/Todo.scss';

const Todo = ({text, completed, onCheck, onDelete}) => {

    return (
        <div>
            <div className="todo">
                <TodoAction onClick={onDelete}>
                    <Delete />
                </TodoAction>
                <Checkbox
                    label={text}
                    checked={completed}
                    style={{heigth: '48px', padding: '12px', display: "flex"}}
                    onCheck={onCheck}
                />

                <div style={{display: 'flex'}}> {' '}</div>
            </div>
            <Divider />
        </div>
    );
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    completed: PropTypes.bool,
};

Todo.defaultProps = {
    completed: false
};

export default Todo;