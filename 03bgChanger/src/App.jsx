import React from 'react'
import './index.css'

const App = () => {
  const [bgColor, setBgColor] = React.useState('white')

  return (
    <div className={bgColor} style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="bg-black">
        <button className="blue" onClick={() => setBgColor('blue')}>blue</button>
        <button className="green" onClick={() => setBgColor('green')}>green</button>
        <button className="red" onClick={() => setBgColor('red')}>red</button>
      </div>
    </div>
  )
}

export default App