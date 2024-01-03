import React from "react";
import './ProductDisplay.css';

const ProductDisplay=(props)=>
{
    const {product}=props;
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplayy-main-img" src={product.image} alt="" />
                </div>
            </div>
            <button>ADD TO CART</button>
        </div>
        
        
    )
}
export default ProductDisplay;