import React, { useState } from 'react';
import './CreateAccountCheff.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import CreateAccount from '../../comps/CreateAccount';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';




export default function CreateAccountPageChef() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")
  const [merch, setMerch] = useState(true);
  
  const HandleSignup = async(email,pass,name,merch) =>{
    var resp = await axios.post("/api/users" ,{
      isMerchant:merch,
      email:email,
      password:pass,
      name:name
    });
  }

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
        <SignUp text="Name"
          onChange={(e)=>{
            setName(e.target.value);
          }}
        ></SignUp>
        </div>
        <div className="input">
        <SignUp text="Email Address"
           onChange={(e)=>{
            setEmail(e.target.value);
          }}
        ></SignUp>
        </div>
        <div className="input">
        <SignUp text="Password"
          onChange={(e)=>{
            setPass(e.target.value);
          }}
        ></SignUp>
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

        <Link to="/DashBoardChef">
        <div className="ButtonBox1"> 
        <Button text="Proceed"
          disabled={false}
          onClick={()=>{
            HandleSignup(email,pass,name, merch);
          }}
        ></Button>
        </div>
        </Link>

        
     </div>   



        
     </div>   
      

}