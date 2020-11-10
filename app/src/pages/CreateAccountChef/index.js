import React, { useState } from 'react';
import './CreateAccountCheff.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import CreateAccount from '../../comps/CreateAccount';
import {useHistory, Link} from "react-router-dom";




export default function CreateAccountPage() {
  
  const history = useHistory();
  
  return<div className="CreateAccountCheffApp">
        <div className="LogoBox">
        <h1>Create an account for</h1>
        <CreateAccount onClick={()=>{
          history.push("/CreateAccountGourmet");
        }}
        activeChef={true}></CreateAccount>
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
        
        <div className="safe">
        <h3>Food Safe Verification</h3>
        Please import the following documents
        <ul>
          <li>Food Safe Certificate</li>
          <li>Health Inspector reference</li>
          <li>Goverment ID</li>
        </ul>
        </div>

        <Link style={{ textDecoration: 'none' }} to="/DashBoardChef">
        <div className="ButtonBox1"> 
        <Button text="Proceed"></Button>
        </div>
        </Link>

        
     </div>   



        
     </div>   
      

}