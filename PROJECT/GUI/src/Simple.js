import React from 'react';
import './App.css';

function temp(){

 
    return(
        <div className="App">
            <header className="inline-div">
            <textarea cols="75" type="code" placeholder="Input Your Code Here:" id="UserInput" className="inline-txtarea">
            </textarea>
            <button className="button">Run</button>
            <textarea cols="75" placeholder="result" className="inline-txtarea">
            </textarea>
            </header>
        </div>
    );
}

export default temp;