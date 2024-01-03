import React from "react";
import './Hero.css';
import fast from '../assests/fast-delivery.png';
import arrow_icon from '../assests/arrow.png';
import hero_image from'../assests/hero.png';
const Hero=()=>
{
    return(
        <div className="hero">  
            <div className="hero-left">
                <h2>WELCOME TO MEDPLUS</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>24/7</p>
                    <p>Door</p>
                    <p>Delivery</p>
                        <img src={fast} />
                    </div>
                </div>
                <div className="hero-latest-btn">
                    <div>EXPLORE</div>
                    <img src={arrow_icon} />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image}/>
            </div>
        </div>
    )
}

export default Hero;