import React, { Component } from 'react';
import './App.css';

class TextInput extends Component {
    render() {
        return (<textarea name="input"
            id="editor"
            cols="30"
            rows="5"
            placeholder="Type Here..."
            value={this.props.value}
            onChange={this.props.handleInput}
            className="box left" >
            </textarea>
        );
    }
}

export default TextInput;