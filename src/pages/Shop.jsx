import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/popular/popular";
import Offers from "../components/offers/offers";
import NewsLetter from "../components/NewsLetter/NewsLetter";






const Shop=()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewsLetter/>
        </div>
    );
}

export default Shop;