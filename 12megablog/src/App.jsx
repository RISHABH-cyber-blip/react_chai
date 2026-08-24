import { useState,useEffect } from "react"
import { useDispatch } from "@reduxjs/toolkit"
import "index.css"
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const App = () => {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser(dispatch)
    .then((userData)=>{
        if(userData) {
           dispatch(login(userData))
        }
        else{
           dispatch(logout())
        }
    })
    .finally(()=>{setLoading(false)})
  },[])

  return !loading ? (
    <div className="flex justify-center items-center h-screen text-2xl font-bold">
       Loading....
       <Header />
       <main>
         {/*<Outlet />*/}
       </main>
       <Footer />
    </div>
  ): null
  
}

export default App