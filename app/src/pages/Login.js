import React from 'react';
import './login.scss';
import SignUp from '../comps/SignUp';
import Button from '../comps/MainButton';


export default function Login() {
  return<div className="app">
        <div className="LogoBox">
          <img src="./logo.svg"></img>
        </div>



        <div className="LoginBox">
        <div className="input">
        <SignUp text="Email"></SignUp>
        </div>
        
        <div className="input">
        <SignUp text="Password"></SignUp>
        </div>

        <a>Forgot password?</a>

        <div className="ButtonBox"> 
        <Button text="Log In"></Button>
        </div>
        <div className="ButtonBox"> 
        <Button text="Create Account"></Button>
        </div>
     </div>   
        
    </div>

}