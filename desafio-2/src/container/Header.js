import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import ContentAdd from 'material-ui/svg-icons/content/add';
import UpArrow from 'material-ui/svg-icons/navigation/arrow-upward';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward';

import TodoAction from '../component/TodoAction';
import Order from '../component/Order';
import {addTodo} from '../data/todo/action';
import {orderAsc, orderDes} from '../data/order/action';

import './style/Header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
            hintText: "Add todo"
        }
    }

    onAddTodo = (e) => {
        e.preventDefault();

        this.props.addTodo(this.state.value);

        this.setState({
            value: ""
        });
    };

    onAscTodo = () => {
        this.props.orderAsc();
    };

    onDownTodo = () => {
        this.props.orderDesc();
    };

    onTextFieldChange = e => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        const {hintText, value} = this.state;

        return (
            <header className="header">
                <form className="form" onSubmit={this.onAddTodo}>
                    <TextField
                        hintText={hintText}
                        value={value}
                        onChange={this.onTextFieldChange}
                        style={{flex: 5, paddingLeft: 10}}
                    />

                    <TodoAction onClick={this.onAddTodo}>
                        <ContentAdd />
                    </TodoAction>

                    <Order onClick={this.onAscTodo}>
                        <UpArrow />
                    </Order>
                    <Order onClick={this.onDownTodo}>
                        <DownArrow />
                    </Order>
                </form>
            </header>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text)),
        orderAsc: () => dispatch(orderAsc()),
        orderDesc: () => dispatch(orderDes())
    };
};

export default connect(null, mapDispatchToProps)(Header);