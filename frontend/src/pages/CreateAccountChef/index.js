import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../../context/provider';
import './CreateAccountCheff.scss';
import SignUp from '../../comps/SignUp';
import Button from '../../comps/MainButton';
import CreateAccount from '../../comps/CreateAccount';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';
import AddListingItem from '../../comps/AddListingItem';
import AlertBox from '../../comps/AlertBox';




export default function CreateAccountPageChef() {


  const {state, dispatch} = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")
  const [merch, setMerch] = useState(true);
  const [AlertError, setError] = useState(true);

  const history = useHistory();
  
  const HandleSignup = async(email,pass,name,merch) =>{
    try{
    var resp = await axios.post("/api/users" ,{
      email:email,
      password:pass,
      name:name,
      isMerchant:true
    });

    dispatch({
      type:"userInfo",
      token:resp.data.token,
      email:resp.data.email,
      username:resp.data.name
    });

    history.push("/DashBoardChef");
  }
  catch{
    setError(false)
  }

  }

  
  return<div className="CreateAccountCheffApp">

          <div className="AlertCont">
           <AlertBox
          active={AlertError}
          buttonActive={true}
          text="Please fill in all fields"
          textButton1="Ok"
          onClickYes={()=>{setError(true)}}
          ></AlertBox>
          </div>
      
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
        <SignUp 
          type="password"
          text="Password"
          onChange={(e)=>{
            setPass(e.target.value);
          }}
        ></SignUp>
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

        <div className="addPhoto">
          <AddListingItem text="Upload your documents here!"></AddListingItem>
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