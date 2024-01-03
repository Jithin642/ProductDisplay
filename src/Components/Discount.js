import React from 'react'
import './discount.css'
const Discount = ({discount}) => {
    // const discount = "40%";
  return (
    <div className='discount'>
        -{discount}%
    </div>
  )
}

export default Discount