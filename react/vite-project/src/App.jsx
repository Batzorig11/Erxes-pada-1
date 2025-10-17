import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState();
  const [result, setResult] = useState();
  return (
    <div>
      <input
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        type="number"
      />
      ;
      <button
        onClick={() => {
          if (number % 2 === 0) {
            setResult("tegsh");
          } else setResult("sondgoi");
        }}
      >
        Enter
      </button>
      <p>{result}</p>
    </div>
  );
}

export default App;
