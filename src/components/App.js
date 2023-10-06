import React, { useState } from "react";
import './../styles/App.css';
import 'style.css';

const App = (props) => {

  return (
    <div className="App" id="main">
      <button id="click">Click</button>
      <p id="para" className="hide show" >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
