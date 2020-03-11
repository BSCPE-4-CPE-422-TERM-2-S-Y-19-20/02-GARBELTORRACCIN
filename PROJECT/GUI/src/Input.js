import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

constructor(props){
super(props);

this.state = {
  username : ''
}

this.updateInput = this.updateInput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}


updateInput(event){
this.setState({username : event.target.value})
}


handleSubmit(){
console.log('Your input value is: ' + this.state.username)
//Send state to the server code
}

render(){
return (
    <div>
    <textarea type="text" onChange={this.updateInput} className='inline-txtarea'></textarea>
    <button type="submit" onClick={this.handleSubmit} >Display</button>
    <h1><br></br><br></br><br></br>{this.state.username}</h1>
    
    </div>
  );
}
} 


//output
//Your input value is: x