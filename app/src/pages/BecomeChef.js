import React from 'react';
import './BecomeChef.scss'; //don't need this because it's imported in App.scss
import SignUp from '../comps/SignUp';
import Button from '../comps/MainButton';
import CreateAccount from '../comps/CreateAccount';
import './global.scss';



export default function BecomeChefPage() {
  return<div className="app becomechef">
        <div className="LogoBox">
        <h1>Create an account for</h1>
        <CreateAccount></CreateAccount>
        </div>



        <div className="InputBox">
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
        


        <div className="ButtonBox"> 
        <Button text="Proceed"></Button>
        </div>
     </div>   
        
    </div>

}