import React from "react"
import { NavLink } from 'react-router-dom'
import './NavBar.css'



function NavBar ()
{
    return(
    <div className='navbar'>
       <span className="nav-logo">Fundi Finder</span>
      <h3 className='head'> </h3>

      <NavLink  to='/' >Home</NavLink>

      <NavLink  to='/about'>About</NavLink>

      <NavLink to='/fundi'>Fundi</NavLink>

      <NavLink to='/ratings'>Ratings</NavLink>
    </div>
)};
export default NavBar;

