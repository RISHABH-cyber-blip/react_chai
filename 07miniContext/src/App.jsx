import React from 'react'
import UserContextProvider from './context/UserContextProvider';
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {
  return (
    <UserContextProvider>
      <div>App</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App