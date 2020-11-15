import React from 'react';
import './OrderConfirmation.scss';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import OrderDetails from '../../comps/OrderDetails';
import ConfirmedLottie from '../../comps/ConfirmedLottie';
import {Link, useHistory} from "react-router-dom";


export default function OrderConfirmation() {
    
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
            <Link style={{ textDecoration: 'none' }} to ="/CurrentOrderPage">  
                <Button text="Continue"></Button>
            </Link>
        </div>
        </div>
    </div>
}
