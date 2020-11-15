import React, { useState } from 'react';
import './CreateAccountGourmet.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import CreateAccount from '../../comps/CreateAccount';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';


export default function CreateAccountPageGourmet() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")
  
  const history = useHistory();

  const HandleSignup = async(email,pass,name) =>{
    var resp = await axios.post("/api/users" ,{
      email:email,
      password:pass,
      isMerchant:false,
      name:name
    });
    console.log(resp.data);
  }
  
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
        <SignUp text="First Name"
        onChange={(e)=>{
          setName(e.target.value);
        }}
        ></SignUp>
        </div>
        <div className="input">
        <SignUp text="Last Name"></SignUp>
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
        

        <Link to="/DashBoardGourmet">
        <div className="ButtonBox1"> 
        <Button text="Proceed"
        disabled={false}
        onClick={()=>{
          HandleSignup(email,pass,name);
        }}
        ></Button>
        </div>
        </Link>

        
     </div>   



        
     </div>   
      

}