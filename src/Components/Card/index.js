import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Discount from '../Discount';
import './Card.css'
import car from '../../images/g92-2-500x500 1.svg'
import fiveStar from '../../images/fivestar.svg'
import wishList from '../../images/wishlist.svg'
import view from '../../images/view.svg'

const Card = () => {
    const discount = "40"
    const name = "HAVIT HV-G92 Gamepad"
    const newPrice = "$120"
    const totalReviews = 90;
    const oldPrice = "$160"
  return (
    <div className='card'>
        <div className='image-card'>
            <div className='row-1'>
                <Discount discount={discount} />
            </div>
            <div className='row-2'>
                <img className='main-image' src={car} alt="sample"/>
            </div>
            <div className='last-col'>
                <img className='wish-icon' src={wishList} alt ="sample"/>
                <img src={view} alt ="sample"/>
            </div>
        </div>
        <div>
            <div className='name'>{name}</div>
            <div className='price'>
                <div className='new-price'>{newPrice}</div>
                <div className='old-price'>{oldPrice}</div>
            </div>
            <div className='fivestar'>
                <img src={fiveStar} alt="sample" /> 
                <div className='totalReviews'>({totalReviews})</div>
            </div>
        </div>
    </div>
  )
}

export default Card