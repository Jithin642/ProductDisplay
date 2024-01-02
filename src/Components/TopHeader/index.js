import React from 'react'
import './TopHeader.css'

const TopHeader = () => {
  return (
    <div className='TopHeader'>

        <div className='starting-side'>
            <div className='salutation'>Good Evening, Max!</div>
            <div>E-commerce dashboard homepage</div>
        </div>

        <div className='ending-side'>
            <div className='input-field'>
                <input id='search' type='text' value="search"></input>
            </div>
                <img className='notification-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfVkqHN1ymj6huvCp5DMsP2Opgq6XtPjALAj7vKMyeQ&s"  alt="Notifs"/>
            <img className='profile-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA8cTn1-RRcQ_T4-cf40vYi4sjFEADIdog1TqwvXO3kw&s" alt="noProfile" />
        </div>
    </div>
  )
}

export default TopHeader