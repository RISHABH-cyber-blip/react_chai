import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../services/authService'
import {logout} from '../../redux/features/auth/authSlice' 

const LogOutBtn = () => {

    const dispatch=useDispatch()
    const logouthandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div>
      <button onClick={logouthandler} className="btn btn-danger ">
        Log Out
      </button>
    </div>
  )
}

export default LogOutBtn