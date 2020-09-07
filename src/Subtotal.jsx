import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {getCartTotal} from './reducer';

const Subtotal= ()=>{
    const[{cart},dispatch]=useStateValue();
    return(
        <div className="subtotal">
        <CurrencyFormat 
        value={getCartTotal(cart)} 
        decimalScale={2}
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={'$'} 
        renderText={(value) =>( 
      <div>
         <p>Subtotal ({cart.length} item): <strong> {value}</strong></p>
         <small className="st_checkbox">
             <input type="checkbox"/>This order contains a gift
         </small>
        </div>
        )} />
        <button className="st_btn">Proceed to Checkout</button>

        </div>
    );
};

export default Subtotal;