import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0);
  
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Rishabh Counter</h1>
      <h2>Counter Value</h2>
      <div className="counter-value">{count}</div>
      <div className="button-container">
        <button 
          className="btn btn-increment" 
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button 
          className="btn btn-decrement" 
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button 
          className="btn btn-reset" 
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App