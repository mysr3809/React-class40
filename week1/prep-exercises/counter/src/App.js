import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(prev => prev + 1);
  }
  const decrement = () => {
    setCount(prev => prev - 1)
  }
  const feedback = count > 10 ? "It is higher than 10!" : "Keep Counting!"
  return (
    <div className="App">
      <button onClick={() => increment()}>Increase</button>
      <h2>{count}</h2>
      <h3>{feedback}</h3>
      <button onClick={() => decrement()}>Decrease</button>
    </div>
  );
}

export default App;
