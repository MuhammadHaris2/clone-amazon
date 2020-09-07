import React from 'react';
import { useStateValue } from './StateProvider';

const CheckoutProduct = (props)=>{
    const[{cart},dispatch]=useStateValue();
    const removeFromCart=()=>{
        dispatch({
            type: "Remove_To_Cart",
            id : props.id,

        })
    }
    return(
        <div className="checkoutproduct">
        <img className="cop_image" src={props.image } alt =""/>
        
        <div className="cop_info">
        <p className="cop_title">{props.title}</p>
        <div className="cop_prize">
        <small>$ </small>
        <strong>{props.price}</strong>
        </div>
        <div className="cop_star">
         {
             Array(props.rating).fill().map((_)=>(
                 <p>⭐️</p>
             ))
         }
         </div>
         <div>
         <button className="cop_button" onClick={removeFromCart}>Remove to card</button>
        
         </div>

        </div>

        </div>

    );
};

export default CheckoutProduct;