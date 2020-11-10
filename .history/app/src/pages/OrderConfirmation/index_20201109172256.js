import React from 'react';
import './OrderConfirmation.scss';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import OrderDetails from '../../comps/OrderDetails';
import Lottie from 'react-lottie';
import animData from '../../public/confirmed.json';


export default function OrderConfirmation() {
    const dO = {
        loop: true,
        autoplay: true, 
        animationData: animData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return <div className="app">             
       <div>
           <TopBar text="Confirmation"></TopBar>
       </div>
       <div className="OrderCont">
        <div className="OrderConfirmed">
            Order confirmed
            <Lottie
            options={dO}
            />
            <OrderDetails profileimg="none" Chef=""></OrderDetails>
        </div>
        <div className="ButtonBox"> 
            <Button text="Continue"></Button>
        </div>
        </div>
    </div>
}
