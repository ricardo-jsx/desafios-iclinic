import React from 'react';
import {connect} from 'react-redux';

import TodoList from '../component/TodoList';
import {toggleTodo, removeTodo} from '../data/todo/action';

import './style/App.scss'

class Body extends React.Component {

    orderAsc = () => {
        const {todos} = this.props;
        return todos.sort((a, b) => a.text.localeCompare(b.text) !== -1);
    };

    orderDesc = () => {
        const {todos} = this.props;
        return todos.sort((a, b) => a.text.localeCompare(b.text) === -1);
    };

    showOnlyCompleted = () => (this.props.todos.filter(todo => todo.completed));

    render() {
        const {todos, toggleTodo, deleteTodo, order, visibility} = this.props;

        const ordered = order.asc ? this.orderAsc() : this.orderDesc();
        const filtered = visibility.completed ? this.showOnlyCompleted() : ordered;

        return (
            <section className="body">
                <TodoList todos={filtered} toggleTodo={toggleTodo} handleDeleteTodo={deleteTodo}/>
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
        toggleTodo: id => dispatch(toggleTodo(id)),
        deleteTodo: id => dispatch(removeTodo(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);