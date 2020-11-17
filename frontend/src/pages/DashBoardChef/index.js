import React from 'react';
import './DashBoardChef.scss'
import NavBarChef from '../../comps/NavBarChef';
import SummaryBox from '../../comps/SummaryBox';
import ActivityFeed from '../../comps/ActivityFeed';
import {useHistory, Link} from "react-router-dom";




export default function DashBoardChefPage() {

  const history = useHistory();
  

  return<div className="DashBoardChefApp">
        <h3>Order expected today</h3>
        <div className="OrderToday">
            <div className="SumBox"><SummaryBox></SummaryBox></div>
            <div className="SumBox"><SummaryBox></SummaryBox></div>
            <div className="SumBox"><SummaryBox></SummaryBox></div>
            <div className="SumBox"><SummaryBox></SummaryBox></div>
        </div>

        <h3>Activity Feed</h3>
        <div className="ActivityFeedBox">
            <ActivityFeed></ActivityFeed>
        </div>
        <div className="Nav">
          <NavBarChef
          active={1}
          onClickCreate={()=>{
            history.push("/CreateItem");
          }}
          onClickAccount={()=>{
            history.push("/ChefMyAccount");
          }}
          onClickOrder={()=>{
            history.push("/ChefOrdersPending");
          }}
          onClickCalendar={()=>{
            history.push("/ChefCalendar");
          }}
          ></NavBarChef>
        </div>
        
        
    </div>

}
