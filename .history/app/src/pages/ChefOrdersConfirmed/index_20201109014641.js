import React from 'react';
import './ChefOrdersConfirmed.scss'
import NavBarChef from '../../comps/NavBarChef';
import SummaryBox from '../../comps/SummaryBox';


export default function ChefOrdersConfirmed() {
  return<div className="app">
        <div className="ConfirmedOrders">
          <div className="OrderSummary"><SummaryBox></SummaryBox></div>
          <div className="OrderSummary"><SummaryBox></SummaryBox></div>
          <div className="OrderSummary"><SummaryBox></SummaryBox></div>
          <div className="OrderSummary"><SummaryBox></SummaryBox></div>
        </div>
        <div className="Nav">
          <NavBarChef></NavBarChef>
        </div>
        
        
    </div>


}
