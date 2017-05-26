import React from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';

import AddTodo from '../component/AddTodo';
import AscTodo from '../component/AscTodo';
import DownTodo from '../component/DownTodo';
import {addTodo} from '../data/todo/action';

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
        console.log("ASC");
    };

    onDownTodo = () => {
        console.log("DOWN");
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

                    <AddTodo onClick={this.onAddTodo}/>
                    <DownTodo onClick={this.onDownTodo}/>
                    <AscTodo onClick={this.onAscTodo}/>
                </form>
            </header>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => dispatch(addTodo(text))
    };
};

export default connect(null, mapDispatchToProps)(Header);