import React from 'react'
import './NewLetter.css';


export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET Exclusive offers on your Email</h1>
        <p>Subscribe to our newlettetr and stay updatetd</p>
        <div>
            <input type="email" placeholder='your Email id' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}
