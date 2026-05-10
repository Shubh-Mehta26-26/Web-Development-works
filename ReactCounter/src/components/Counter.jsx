import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="Counter-container">
      <p id="para">You have clicked {count} time</p>
      <button
        id="btn"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};
export default Counter;
