import React from 'react';
import {connect} from 'react-redux';

import TodoList from '../component/TodoList';
import {toggleTodo} from '../data/todo/action'

class Body extends React.Component {

    render() {
        const {todos, toggleTodo} = this.props;

        return (
            <section style={{flex: 8}}>
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todo,
    order: state.order,
    visibility: state.visibility,
});

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);