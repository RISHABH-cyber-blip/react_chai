import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0);
  
  const handleReset = () => {
    setCount(0);
  };
  const increment = () => {
     if(count < 20){
      setCount(count + 1);
     }
     else{
      alert("Counter cannot exceed 20");
     }
  };
  
  const decrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
    else{
      alert("Counter cannot go below 0");
    }
  };


  return (
    <div className="container">
      <h1>Rishabh Counter</h1>
      <h2>Counter Value</h2>
      <div className="counter-value">{count}</div>
      <div className="button-container">
        <button 
          className="btn btn-increment" 
          onClick={increment}
        >
          Increment
        </button>
        <button 
          className="btn btn-decrement" 
          onClick={decrement}
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