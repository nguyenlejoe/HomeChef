import React from 'react';
import './OrderHistory.scss';
import TopBar from '../../comps/TopBar';
import OrderHistory from '../../comps/OrderHistory';

export default function OrderHistoryPage() {

return(
     <div className="appCont">
         <TopBar  text="Order History"/>
         <OrderHistory oNumber="123456" upTime="17/02/2021" location="2126 Hasting Street Burnaby"/>
    </div>
)
}
