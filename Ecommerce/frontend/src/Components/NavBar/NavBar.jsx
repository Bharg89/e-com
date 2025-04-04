import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'



export const NavBar = () => {

    const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className='Nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='Nav-Menu'>
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}}  to='/'>Shop</Link >{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none'}}  to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}}  to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kid")}}> <Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
        </ul>
        <div className="Nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>

        </div>
    </div>
  )
}
