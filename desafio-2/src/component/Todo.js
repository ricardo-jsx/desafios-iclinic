import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';
import Delete from './DeleteTodo';
import Divider from 'material-ui/Divider';

const Todo = ({text, completed, onCheck}) => {

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: '20px', flex: 1}}>
                <Delete />
                <Checkbox
                    label={text}
                    checked={completed}
                    style={{heigth: '48px', padding: '12px'}}
                    onCheck={onCheck}
                />
            </div>
            <Divider />
        </div>
    );
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
    completed: PropTypes.bool,
};

Todo.defaultProps = {
    completed: false
};

export default Todo;