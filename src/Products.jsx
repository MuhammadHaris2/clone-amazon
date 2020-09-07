import React from 'react';
import {useStateValue} from './StateProvider';
import {useHistory} from 'react-router-dom';


const Products=(props)=>{
  const [{cart,user},dispatch]=useStateValue();
  const history = useHistory();
  
  const addToCart =()=>{
      if(user){
        dispatch({
            type:"Add_To_Cart",
            items:{
                id:props.id,
                title:props.title,
                image:props.images,
                price:props.price,
                rating:props.rating,
            }
        })
      }else{
        history.push("/login");

      }
      
  }
    return(
        <div className="product">
        
        <div className="p_info">
        <p>{props.title}</p>
        <div className="p_prize">
        <small>$ </small>
        <strong>{props.price}</strong>
        </div>
        <div className="p_star">
         {
             Array(props.rating).fill().map((_)=>(
                 <p>⭐️</p>
             ))
         }
         </div>
        </div>

        
        <img className="p_image" src={props.images} alt="" />
        <button className="p_button" onClick={addToCart}>Add to card</button>
        
        </div>
    );
};
export default Products;