import React, { useState } from "react";
import "./App.css";

function App() {
  const [output, setOutput] = useState("");
  if (output.length > 11){
    setOutput("Too big");
    setTimeout(() => setOutput(""), 2000)
  }
  return (
    <div className="calc">
      <div className="display">
        <p className="output">{output}</p>
      </div>
      <span className="name">Kawaii Calc :3</span>
      <div className="keypad">
        <button onClick={() => setOutput("")}>AC</button>
        <button onClick={() => setOutput(output.slice(0, -1))}>DE</button>
        <button onClick={() => setOutput(Math.sqrt(output).toPrecision(10))}>√</button>
        <button onClick={() => setOutput((output * output).toString())}>^2</button>
        <button onClick={() => setOutput(output + "7")}>7</button>
        <button onClick={() => setOutput(output + "8")}>8</button>
        <button onClick={() => setOutput(output + "9")}>9</button>
        <button onClick={() => setOutput(eval(output) + "÷")}>÷</button>
        <button onClick={() => setOutput(output + "4")}>4</button>
        <button onClick={() => setOutput(output + "5")}>5</button>
        <button onClick={() => setOutput(output + "6")}>6</button>
        <button onClick={() => setOutput(eval(output) + "×")}>×</button>
        <button onClick={() => setOutput(output + "1")}>1</button>
        <button onClick={() => setOutput(output + "2")}>2</button>
        <button onClick={() => setOutput(output + "3")}>3</button>
        <button onClick={() => setOutput(eval(output) + "-")}>-</button>
        <button onClick={() => setOutput(output + "0")}>0</button>
        <button>.</button>
        <button
          onClick={() => {
            try {
              setOutput(eval(output));
            } catch (e) {
              setOutput("Error");
              setTimeout(() => setOutput(""), 2000)
            }
          }}
        >
          =
        </button>
        <button onClick={() => setOutput(eval(output) + "+")}>+</button>
      </div>
    </div>
  );
}

const lock = document.createElement("meta");
lock.name = "darkreader-lock";
document.head.appendChild(lock);
export default App;
