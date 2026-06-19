import React,{useState,useContext} from 'react'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {

    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text" placeholder='username' />
        <input 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password" placeholder='password' />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login