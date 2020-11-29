import React, { Component } from 'react';
import {InputGroup,InputGroupAddon,Input,Button} from 'reactstrap';
import Axios from "axios";

class AddTodo extends Component {
    constructor(){
        super();
        this.handleText = this.handleText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    state = { 
        title: "",
        error: ""
     }

    handleText (e){
        this.setState({
            title: e.target.value
        })
    }

    handleClick(){
        Axios.post('http://localhost:5000/api/todos/', {title: this.state.title})
        .then((res) => {
            console.log(res);
            this.setState({
                title: ""
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    render() { 
        return (
        <div>
            <InputGroup>
                <Input onChange={this.handleText}  value={this.state.title}/>
                <InputGroupAddon addonType="prepend"><Button onClick={this.handleClick}>Add a Todo</Button></InputGroupAddon>
            </InputGroup>
        </div>
        );
    }
}
 
export default AddTodo;