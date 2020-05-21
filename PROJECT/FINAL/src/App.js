

import React, {useState} from 'react';
import './App.css';


function App() {

  
  var [isRed, setRed] = useState('');
  var temp;

  var update = e => {
    setRed(e.target.value);
};

  var click =()=>{
    temp=isRed;
  };


  return (
    <div className="App">
      <header className="App-header">
        <br></br>If-Compiler
        
      </header>
      <header className="inline-div">
        <textarea 
            cols="75" 
            type="code" 
            placeholder="Input Your Code Here:" 
            className="inline-txtarea"
            value={isRed}
            onChange={update}
        >
              
        </textarea>

            <button className="button" onClick={click}>Run</button>

        <textarea cols="75" placeholder="Result:" 
            className={isRed==='0' ? "red" : isRed==='1' ? "green" : "inline-txtarea"}>
        </textarea>

          <h1>{temp}</h1>

      </header>
    </div>



  );
  }

export default App;