import React from 'react'
import {useState,useCallback,useEffect,useRef} from 'react'

const App = () => {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [char, setChar] = useState(true)
  const [num, setNum] = useState(true)

  const passwordGenerator = useCallback(() => {
    // Password generation logic here
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(num) str += '0123456789'
    if(char) str += '!@#$%^&*()_+'
    for(let i=0; i<length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }
    setPassword(pass)
  }, [length, char, num,setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, char, num,passwordGenerator])

  let passwordRef=useRef(null)
  const copyToClipboard=useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }, [])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='p-4 flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          readOnly
          placeholder="Your password will appear here" 
          className="w-full p-2 mb-4 text-center bg-gray-800 text-white rounded"
          ref={passwordRef}
        />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={copyToClipboard}>
            copy
          </button>
        </div>

        <div className='p-4 flex flex-col shadow rounded-lg overflow-hidden mb-4'>
          <div className='flex items-center mb-4'>
            <input
            type="range"
            min="8"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full mb-4 counter-value"
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center mb-4'>
            <input
            type="checkbox"
            checked={char}
            onChange={() => setChar(prev => !prev)}
            className="mr-2"
          />
          <label>Include Special Characters</label>
          </div>
          <div className='flex items-center mb-4'>
            <input
            type="checkbox"
            checked={num}
            onChange={() => setNum((prev) => !prev)}
            className="mr-2"
          />
          <label>Include Numbers</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App