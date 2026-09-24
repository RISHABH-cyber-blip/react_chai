import { useState,useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { pingAppwrite } from "./appwrite/client"
import {login,logout} from "./store/authSlice"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import './index.css'

const App = () => {
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    pingAppwrite()
    authService.getCurrentUser()
    .then((userData)=>{
        if(userData) {
           dispatch(login(userData))
        }
        else{
           dispatch(logout())
        }
    })
    .finally(()=>{setLoading(false)})
  },[dispatch])

  return loading ? (
    <div className="flex justify-center items-center h-screen text-2xl font-bold">
      Loading....
    </div>
  ) : (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/*<Outlet />*/}
      </main>
      <Footer />
    </div>
  )
  
}

export default App