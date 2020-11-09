import React from 'react';
import './ChefOrdersConfirmed.scss'
import NavBarGourmet from '../../comps/NavBarGourmet';
import SummaryBox from '../../comps/SummaryBox';
import ActivityFeed from '../../comps/ActivityFeed';


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
