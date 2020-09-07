import React from 'react';
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from './StateProvider';
import './index.css';
import { auth } from './firebase';

const Header = ()=>{
    const [{cart,user},dispatch]= useStateValue();
    const login = ()=>{
        if(user){
            auth.signOut();
        }
    };


    return(
        <div className="header">
        <Link to="/">
        <img className="h_images" src="http://pngimg.com/uploads/amazon/amazon_PNG28.png" alt=""/>
        </Link>
        
        <div className="h_search">
        <input type="text" className="h_input"/>
        <SearchIcon className="h_icon"/>
        </div>
        
        <div className="h_right">
        <Link to={!user && "/login"} className="h_link">
           <div className="h_options" onClick={login}>
            <span className="h_s1">Hello {user?.email}</span>
            <span className="h_s2">{user ? 'Sign Out':'Sign In'}</span>
            </div>
        </Link>

        <Link to="/" className="h_link">
           <div className="h_options">
            <span className="h_s1">Returns</span>
            <span className="h_s2">& Orders</span>
            </div>
        </Link>
    
        
        {/* <Link to="/" className="h_link">
           <div className="h_options">
            <span className="h_s1">Your</span>
            <span className="h_s2">Prime</span>
            </div>
        </Link> */}

        <Link to="/checkout" className="h_link">
           <div className="h_optionsB">
            <ShoppingCartIcon/>
            <span className="h_s22">{cart?.length}</span>
            </div>
        </Link>
    
        
        </div>

        </div>
    )
}

export default Header;