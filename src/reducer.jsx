export const initialState={
      cart:[//{ id:"16",
    // title:"Logitech USB Headset H390 with Noise Cancelling Mic",
    // image:"https://images-na.ssl-images-amazon.com/images/I/61CqYq%2BxwNL._AC_SL1500_.jpg",
    // price:30.09,
    // rating:5},
    // { id:"17",
    // title:"Logitech USB Headset H390 with Noise Cancelling Mic",
    // image:"https://images-na.ssl-images-amazon.com/images/I/61CqYq%2BxwNL._AC_SL1500_.jpg",
    // price:30.09,
    // rating:5}
],
user:null,
};

export const getCartTotal = (carts)=> carts?.reduce((amount,items)=>items.price+amount,0);
const reducer=(state,action)=>{
//console.log(action);
console.log(state);
    switch(action.type){
        case "Add_To_Cart":
            return {
                ...state,
                cart:[...state.cart,action.items],
            }
            break;
         
         case "Remove_To_Cart":
             let newcart = [...state.cart];
             const  index = state.cart.findIndex((cartItem)=>cartItem.id === action.id);

             if (index >=0){
                 newcart.splice(index,1)

             }else{
                 console.warn(`cannot remove (id: ${action.id})`);
             }

             return{...state, cart:newcart,}
             break;
             
           case "Set_User":
               return{
                   ...state,
                   user: action.newUser
               }  
             default:
                 return{state}
    }

}

export default reducer;