import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext);
  if(!user){ 
    return <div>Please login to view your profile.</div>;
  }
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
    </div>
  )
}

export default Profile