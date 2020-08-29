import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput';
import TextOutput from './TextOutput';

const initialState = `
![Icon](https://vikrant-malla.gq/images/index/u78.png)<br>

**Vikrant Malla**

# Creative Designer 
## UI/UX Designer<br>

>My skill set is a mix of both coding and design, and I wanted this to be prominent! <br>

- User Interface & Web Design
- User Experience Design </br>

[Visit my Website](https://vikrant-malla.gq/) </br>

This is a inline \`<div></div>\` </br>

This is a Block of Code
\`\`\`
let x = 5;
let y = 5;
let z = x + y;
\`\`\`
`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: initialState
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            userInput: e.target.value
        });
        console.log(this.state.userInput);
    }

    render() {
        return (

            < div className = "App" >

            <header className = "App-header" >
            <h1 className = "App-title" > Markdown Previewer </h1>  
            </header >

            <div className = "container" >
            <TextInput handleInput = { this.handleUserInput }
            value = { this.state.userInput }/>
            <TextOutput input = { this.state.userInput }/> 
            </div >


            </div>
        );
    }
}

export default App;