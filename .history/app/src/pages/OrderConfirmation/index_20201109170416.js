import React from 'react';
import './OrderConfirmation.scss';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import OrderDetails from '../../comps/OrderDetails';
import Lottie from 'react-lottie';

export default function OrderConfirmation() {
  return <div className="app">             
       <div>
           <TopBar text="Confirmation"></TopBar>
       </div>
       <div className="OrderCont">
        <div className="OrderConfirmed">
            Order confirmed
            <OrderDetails profileimg="none" Chef=""></OrderDetails>
        </div>
        <div className="ButtonBox"> 
            <Button text="Continue"></Button>
        </div>
        </div>
    </div>
}
