import React, { useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './OrderConfirmation.scss';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import OrderDetails from '../../comps/OrderDetails';
import ConfirmedLottie from '../../comps/ConfirmedLottie';
import {Link, useHistory} from "react-router-dom";



export default function OrderConfirmation() {

    const {state,dispatch} = useContext(AppContext);

    function emptyCart (){
        dispatch({
            type:"emptycart",
            items:[],
            qty:0
        })
    }
    
  return <div className="app">             
       <div>
           <TopBar text="Confirmation"></TopBar>
       </div>
       <div className="OrderCont">
        <div className="OrderConfirmed">
            Order confirmed
            <ConfirmedLottie></ConfirmedLottie>
            <OrderDetails profileimg="none" Chef=""></OrderDetails>
        </div>
  
        <div className="ButtonBox"> 
        <Link to="/DashBoardGourmet" style={{ textDecoration: 'none' }}>
            <Button text="Continue"
            disabled={false}
            onClick={()=>{
                emptyCart()
            }}
            ></Button>

            </Link>
        </div>
        </div>
    </div>
}
