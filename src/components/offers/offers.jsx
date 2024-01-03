import React from 'react';
import './offers.css';
import exclusive_image from '../assests/discount.png';
const Offers=()=>
{
    return(
        <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on Best Sellers Products</p><br></br>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image}/>
            
        </div>
        </div>
    )
}

export default Offers;