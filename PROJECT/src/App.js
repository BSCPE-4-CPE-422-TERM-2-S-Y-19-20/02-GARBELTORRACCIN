

import React, {useState} from 'react';
import './App.css';


function App() {

  
  const [isRed, setRed] = useState(false);
  

  const change = () => {
      setRed(true);
     
  };

  return (
    <div className="App">
      <header className="App-header">
        <br></br><br></br><br></br>If-Compiler
        
      </header>
      <header className="inline-div">
            <textarea 
            cols="75" 
            type="code" 
            placeholder="Input Your Code Here:" 
            id="UserInput" 
            className="inline-txtarea"
            
            >
            </textarea>
            <button className="button" onClick={change}>Run</button>
            <textarea cols="75" placeholder="result" className={isRed ? "red" : isGreen ? "green" : "inline-txtarea"}>
            </textarea>
      </header>
    </div>



  );
  }

export default App;
