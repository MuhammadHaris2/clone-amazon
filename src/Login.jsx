import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

const Login = () =>{
    const history = useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const signin = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //redirect to home
            history.push("/"); //bcz agr koi back kry to drct login page pr ay
        }).catch((e)=>alert(e.message));
       

    };
    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //redirect to home
            history.push("/");
        }).catch((e)=>alert(e.message));

    }

    return(
        <div className="login">
        <Link to="/">
            <img className="l_images" src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt =""/>
        </Link>

        <div className="l_sin">
            <h1 className="l_in">Sign In</h1>
            <form className="l_form">
                <h5>Email</h5>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button onClick={signin} type="submit">Sign In</button>
            </form>
            <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button onClick={register}>Create your Amazon Account</button>
        </div>
        </div>
    );
};

export default Login;
