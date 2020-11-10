import React, { useState } from 'react';
import './CreateAccountGourmet.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import CreateAccount from '../../comps/CreateAccount';
import {useHistory, Link} from "react-router-dom";


export default function CreateAccountPage() {
  
  const history = useHistory();
  
  return<div className="CreateAccountGourmetApp">

        <div className="LogoBox">
        <h1>Create an account for</h1>
        <CreateAccount onClick={()=>{
          history.push("/CreateAccountChef");
        }}
        activeGourmet={true}></CreateAccount>
        </div>



        <div className="InputBoxGourmet">
        <div className="input">
        <SignUp text="First Name"></SignUp>
        </div>
        <div className="input">
        <SignUp text="Last Name"></SignUp>
        </div>
        <div className="input">
        <SignUp text="Email Address"></SignUp>
        </div>
        <div className="input">
        <SignUp text="Phone Number"></SignUp>
        </div>
        <div className="input">
        <SignUp text="Date of Birth"></SignUp>
        </div>
        

        <Link style={{ textDecoration: 'none' }} to="/DashBoardGourmet">
        <div className="ButtonBox1"> 
        <Button text="Proceed"></Button>
        </div>
        </Link>

        
     </div>   



        
     </div>   
      

}