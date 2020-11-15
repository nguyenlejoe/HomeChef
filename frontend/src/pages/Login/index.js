import React , {useState} from 'react';
import './login.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';

export default function Login() {

  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const [wrong, setWrong] = useState("");

  

  const HandleLogin = async(email, pass) =>{
    try{
      var resp = await axios.post(`/api/users/login`, {
        email:email,
        password:pass
      });

      if(resp.data.isMerchant === false){
        history.push("/DashBoardGourmet");
      }
      else{
        history.push("/DashBoardChef");
      }
    console.log(resp.data);
  }
  catch(error){
    setWrong("The email or password you entered is incorrect.");
    console.log("sorry not a user");
  }
  }




  return<div className="LoginApp">
        <div className="LogoBox">
        <div className="logo"></div>
        </div>
        

        <div className="LoginBox">
          <div className="input">
          <SignUp text="Email"
          onChange={(e)=>{
            setEmail(e.target.value) 
           }}
          ></SignUp>
          </div>
        
          <div className="input">
          <SignUp 
          type="password"
          text="Password"
          onChange={(e)=>{
            setPass(e.target.value) 
           }}
          ></SignUp>
          </div>
          
          <div className="incorrect">
          <label>{wrong}</label>
          </div>
        
          <a>Forgot password?</a>

          
         
            <div className="ButtonBox1"> 
            <Button text="Login" 
            disabled={false}
            onClick={()=>{
              HandleLogin(email,pass)
              
             }}
            ></Button>
            </div>
        
      
       
            <Link style={{ textDecoration: 'none' }} to ="/CreateAccountChef">
            <div className="ButtonBox1"> 
            <Button text="Create Account" ></Button>
            </div>
            </Link>
            
            </div>
        
    </div>

}