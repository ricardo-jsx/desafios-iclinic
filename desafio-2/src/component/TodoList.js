import React from 'react';
import PropTypes from 'prop-types';
import Remove from 'material-ui/svg-icons/content/remove-circle-outline';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const TodoList = ({todos, toggleTodo}) => {
    const onRowSelection = (rows) => {
        const toggledTodos = todos.map((todo, index) => {
            //If the position of the to-do is inside the 'row' array, he is selected (the row is of the selected ones)
            const foundRow = rows.find(row => row === index);

            if (foundRow !== undefined) {
                return {...todo, completed: true};
            }

            return {...todo, completed: false};
        });

        toggleTodo(toggledTodos);
    };

    const tableRows = todos.map(todo => (
        <TableRow key={todo.id} selected={todo.completed}>
            <TableRowColumn style={{width: 24}}>
                <Remove />
            </TableRowColumn>
            <TableRowColumn>{todo.text}</TableRowColumn>
        </TableRow>
    ));

    return (
        <Table fixedHeader={true} height={'218px'} multiSelectable={true} onRowSelection={onRowSelection}>
            <TableHeader enableSelectAll={false}>
                <TableRow>
                    <TableHeaderColumn style={{width: 24}}></TableHeaderColumn>
                    <TableHeaderColumn>What is your focus for today?</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tableRows}
            </TableBody>
        </Table>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    toggleTodo: PropTypes.func.isRequired
};

TodoList.defaultProps = {
    todos: []
};

export default TodoList;