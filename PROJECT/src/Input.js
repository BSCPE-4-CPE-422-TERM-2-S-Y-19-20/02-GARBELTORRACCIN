import React, { Component } from 'react';

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

print(){
  document.write(this.state.username)
}


render(){
return (
    <div>
    <textarea type="text" onChange={this.updateInput}></textarea>
    <button type="submit" onClick={this.handleSubmit} >Display</button>

    if onclick=true{
      <h2>{this.print}</h2>
    }
    </div>
  );
}
} 


//output
//Your input value is: x