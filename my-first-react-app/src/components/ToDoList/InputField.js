import React, {Component} from 'react'
import initialState from "./initialState.js"
import Display from './display.js';

class InputField extends Component{
    constructor(props) {
        super(props);
        this.state = initialState
        this.saver = this.saver.bind(this)
        this.clear = this.clear.bind(this)
    }

    saver(event) {
        const oldtodos = this.state.items;
        oldtodos.push(this.input.value);
        this.setState({items: oldtodos});
        this.input.value = ""
        event.preventDefault()
    }

    clear() {
        this.setState(initialState)
    }


    render() {
        return (
        <div key="overall div">
            <h1>Yet Another Todo List!</h1>
            <form onSubmit={this.saver}>
                <input type="text" id="ToDo" ref={(a) => this.input = a}/>
                <button type="submit" id="save-button">Save</button>
            </form>  
            <a href="/" onClick={this.clear} id="clear-link">Clear</a>
            {this.state.items.map((todo, index) => <Display id={`task${index}`} text={todo} />)}
        </div>
        
    )}

}

export default InputField