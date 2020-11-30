import React, {useReducer, useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './ChefOrders.scss'
import Button from '../../comps/MainButton';
import ConfirmOrder from '../../comps/ConfirmOrder';
import NavBarChef from '../../comps/NavBarChef';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';




export default function ChefOrderPending() {

  const {state,dispatch} = useContext(AppContext);

  const HandleOrders = async() =>{
    const config = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };
    console.log("test")
    const resp = await axios.get(`/api/orders`, config);
    console.log(resp.data);
  }

  useEffect(()=>{
    HandleOrders();
  },[]);

  const history = useHistory();




  return<div className="app">
    <div className="topbuttons">
        <Button text="Pending Orders" bgcolor="#24B574" radius="40px" width="170px" height="32px" > </Button>
        <Link style={{ textDecoration: 'none' }} to="/ChefOrdersConfirm">
        <Button text="Confirmed Orders" bgcolor="#C4C4C4" radius="40px" width="170px" height="32px" ></Button>
      </Link>
        
    </div>
    <div className="Orderboxes">
    <ConfirmOrder Seller="Yunus Emre" Quantity="5x" Product="Fried Rice"></ConfirmOrder>
    <br></br>
    <ConfirmOrder></ConfirmOrder>
    </div>
    <div className="Nav">
    <NavBarChef active={2}
    onClickCreate={()=>{
      history.push("/CreateItem");
    }}
    onClickAccount={()=>{
      history.push("/ChefMyAccount");
    }}
    onClickHome={()=>{
      history.push("/DashBoardChef");
    }}
    onClickCalendar={()=>{
      history.push("/ChefCalendar");
    }}
    ></NavBarChef>
    </div>
    </div>

}
