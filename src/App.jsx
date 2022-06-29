import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [multipliedValue, setMultipliedValue] = useState(0);

  useEffect(() => {
    setMultipliedValue(count * multiplier);
    console.log(count, multiplier, multipliedValue);
  }, [count]);
  
  {/* Khalid code goes here */}

  function subtractOneFromMultiplier() {
    setMultiplier(multiplier - 1)
  };

  {/* Khalid code goes here */}

  return (
    <div className="App">
      <header className="App-header">
        <span>Count: {multipliedValue}</span>

        <span>Multiplier: x{multiplier}</span>
        <span>
          Add:
          <button onClick={() => setCount(count + 1)}>(+)</button>
        </span>
        <span>
          Subtract:
          <button onClick={() => setCount(count - 1)}>(-)</button>
        </span>
        {/* Khalid code goes here */}
        {/* Create a component that returns a button that when pressed, subtracts one to multiplier  */}
        <span>
          Subtract one from Multiplier:
          <button onClick={subtractOneFromMultiplier}>((x)-1)</button>
        </span>
        {/* Jireh code goes here */}
        {/*  Create a component that returns a button that when pressed, adds one to multiplier  */}
      </header>
    </div>
  );
}

export default App;
