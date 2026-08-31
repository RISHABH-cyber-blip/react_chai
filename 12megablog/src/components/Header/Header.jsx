import React from 'react'
import {container} from '../index.js'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LogOutBtn from './LogOutBtn.jsx'


const Header = () => {
  const authStatus=useSelector((state)=>state.auth.status);
  const navigate = useNavigate();

  const navItems=[
    {
    name: "Home",
    slug: "/",
    active: true
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]
  return (
    <header className="py-3 bg-gray-500">
      <container>
        <nav className="navbar navbar-expand-lg bg-light">
          <div>
            <Link to="/">
             <Logo className="width-40px"/>
             </Link>
          </div>
          <ul>
            {navItems.map((item)=>
             item.active ? (
              <li key={item.slug}>
                <Link className="bg-red" to={item.slug}>{item.name}</Link>
              </li>
             ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
      </container>
    </header>
  )
}

export default Header