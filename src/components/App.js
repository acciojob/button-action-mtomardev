import React, { useState } from "react";
import './../styles/App.css';
import 'style.css';

const App = (props) => {
  let[visible , setVisible] = useState("false")

  const toggleVisible = () => {
    setVisible(true)
  }

  return (
    <div className="App" id="main">
      <button id="click" onClick={toggleVisible}>Click</button>
      <p id="para" className = {visible ? "show" : "hide" } >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
