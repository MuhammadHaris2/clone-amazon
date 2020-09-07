import React from 'react';
import './index.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const  Checkout=()=>{
    const[{cart},dispatch]=useStateValue();
    console.log(cart);
    return(
        <div className="checkout">
          <div className="c_left">
          <img className="co_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/PEX/PeX-Top-PC-1500X375.jpg" alt=""/>
            
            {
                cart?.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                        <p>The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price</p>
                    </div>
                ):(
                    <div >
                       <h2 className="co_p">Shopping Cart</h2>
                       {
                           cart.map(item=>(
                           <CheckoutProduct
                               id={item.id}
                               title={item.title}
                               image={item.image}
                               price={item.price}
                               rating={item.rating}

                           />    
                           ))
                       }
                    </div>

                )
            }
          </div>

          {cart?.length>0 ?(
              <div className="co_right">
                  <Subtotal/>
              </div>

          ): (null)  }
        </div>
      
    );
};

export default Checkout;