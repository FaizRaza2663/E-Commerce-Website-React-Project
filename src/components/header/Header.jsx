import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const navigate = useNavigate()
  return (
    <div className='nav-bar'>
        <img src="https://chawkbazar.vercel.app/assets/images/logo.svg" alt="" />
        <ul className='Nav-bar-link'>
            <li><NavLink to={'/allProducts'} >Products</NavLink></li>
            <li><NavLink to={'/contact'} >Contact</NavLink></li>
        </ul>
        <button>Sign In</button>
        
        
    </div>
  )
}

export default Header