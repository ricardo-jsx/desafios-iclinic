import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({todos, toggleTodo, handleDeleteTodo}) => {
    const list = todos.map(todo => (
        <Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onCheck={() => toggleTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
        />
    ));

    return (
        <div className="todo__list">
            {list}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
    todos: []
};

export default TodoList;