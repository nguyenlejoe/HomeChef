import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../../context/provider';
import './CreateAccountGourmet.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import CreateAccount from '../../comps/CreateAccount';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';
import AlertBox from '../../comps/AlertBox';
import BackButton from '../../comps/WhiteBack';


export default function CreateAccountPageGourmet() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")
  const [AlertError, setError] = useState(true);

  const {state, dispatch} = useContext(AppContext);
  
  const history = useHistory();
 
  const HandleSignup = async(email,pass,name) =>{
    try{
    var resp = await axios.post("/api/users" ,{
      email:email,
      password:pass,
      isMerchant:false,
      name:name
    });

    dispatch({
      type:"userInfo",
      token:resp.data.token,
      email:resp.data.email,
      username:resp.data.name
    });

    console.log(resp.data);

    history.push("/DashBoardGourmet");
  }catch{
    setError(false)
  }
  }
  
  return<div className="CreateAccountGourmetApp">

          <div className="AlertCont">
           <AlertBox
          active={AlertError}
          buttonActive={true}
          text="Please fill in all fields"
          textButton1="Ok"
          onClickYes={()=>{setError(true)}}
          ></AlertBox>
          </div>


        <Link to="/Login"  style={{ textDecoration: 'none' }}>
          <div className="BackButton"><BackButton/></div>
        </Link>

        <div className="LogoBox">
        <h1>Create an account for</h1>
        <CreateAccount onClick={()=>{
          history.push("/CreateAccountChef");
        }}
        activeGourmet={true}></CreateAccount>
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
        <SignUp 
        type="password"
        text="Password"
        onChange={(e)=>{
          setPass(e.target.value);
        }}
        ></SignUp>
        </div>
        

       
        <div className="ButtonBox1"> 
        <Button text="Proceed"
        disabled={false}
        onClick={()=>{
          HandleSignup(email,pass,name);
        }}
        ></Button>
        </div>

        
     </div>   



        
     </div>   
      

}