import React from 'react';
import './login.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import {
  Link
} from "react-router-dom";

export default function Login() {
  return<div className="LoginApp">
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

          
         
            <div className="ButtonBox1"> 
            <Button text="Login" ></Button>
            </div>
        
      
       
            <Link style={{ textDecoration: 'none' }} to ="/CreateAccountChef">
            <div className="ButtonBox1"> 
            <Button text="Create Account" ></Button>
            </div>
            </Link>
            
            </div>
        
    </div>

}