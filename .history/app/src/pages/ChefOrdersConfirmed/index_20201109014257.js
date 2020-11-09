import React from 'react';
import './ChefOrdersConfirmed.scss'
import NavBarChef from '../../comps/NavBarChef';
import SummaryBox from '../../comps/SummaryBox';


export default function ChefOrdersConfirmed() {
  return<div className="app">
        <div className="ConfirmedOrders">
          <SummaryBox></SummaryBox>
          <SummaryBox></SummaryBox>
          <SummaryBox></SummaryBox>
          <SummaryBox></SummaryBox>
        </div>
        <div className="Nav">
          <NavBarChef></NavBarChef>
        </div>
        
        
    </div>


}
