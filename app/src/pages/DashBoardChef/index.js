import React from 'react';
import './DashBoardChef.scss'
import NavBarChef from '../../comps/NavBarChef';
import SummaryBox from '../../comps/SummaryBox';
import ActivityFeed from '../../comps/ActivityFeed';





export default function DashBoardChefPage() {
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
          ></NavBarChef>
        </div>
        
        
    </div>

}
