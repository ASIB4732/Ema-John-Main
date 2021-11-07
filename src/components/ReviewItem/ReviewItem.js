import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const {name, quantity, key,img, price} = props.product;
    
    return (
        <div  className="review-item flix">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
            </div>
        </div>
    );
};

export default ReviewItem;