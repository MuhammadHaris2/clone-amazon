import React, { useEffect } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './index.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
const App = ()=>{
    const[{user},dispatch]=useStateValue();
    useEffect(()=>{
      const unsub =  auth.onAuthStateChanged((authuser)=>{
            if(authuser){
                dispatch({
                    type: "Set_User",
                    newUser: authuser,
                })

            }else{
                dispatch({
                    type: "Set_User",
                    newUser: null,
                })

            }
        });
        return ()=>{
            unsub();
        }
    },[]);
//console.log('User is' ,user);

    return(
        <>
        <Router>
        
        <div className="app">
            <Switch>
            <Route path="/checkout">
                <Header/>
                <Checkout/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/">
            <Header/>
            <Home/>
                   
            </Route>
            
            
            </Switch>
        </div>
        </Router>
        </>
    );
};

export default App;