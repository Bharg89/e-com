import React from 'react'
import './item.css'

export const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-price">
            ${props.new_price}
        </div>
        <div className="item-price-new">
            ${props.old_price}
        </div>
    </div>
  )
}

export default Item;