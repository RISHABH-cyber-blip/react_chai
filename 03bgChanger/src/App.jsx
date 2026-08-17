import React from 'react'
import './index.css'

const App = () => {
  const [bgColor, setBgColor] = React.useState('white')
  const reset = (color) => {
    if (color === 'white') {
      return "white text-white bg-black border border-gray-300 p-2 rounded w-20 h-10 m-4" 
    }
    else {
      return "bg-white text-black border border-gray-300 p-2 rounded w-20 h-10 m-4"
    }
  }

  const handleResetButton = (color) => {
    if(color!=='white') {
      setBgColor('white')
    }
        
  }


  return (
    <div className={bgColor} style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="bg-black" width="100%" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button className="blue" onClick={() => setBgColor('blue')}>blue</button>
        <button className="green" onClick={() => setBgColor('green')}>green</button>
        <button className="red" onClick={() => setBgColor('red')}>red</button>
        <button className={reset(bgColor)} onClick={() => handleResetButton(bgColor)}>reset</button>
      </div>
    </div>
  )
}

export default App