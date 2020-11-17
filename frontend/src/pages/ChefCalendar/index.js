import React, {useState} from 'react';
import Calendar from '../../comps/Calendar';
import SummaryBox from '../../comps/SummaryBox';
import NavBar from '../../comps/NavBarChef';
import './ChefCalendar.scss';
import {useHistory, Link} from "react-router-dom";

export default function ChefCalendar({text}) {

    const history = useHistory();

    return(
        <div className="appContainer">

            <div className="calendarCont">
                <div className="calendarBox"><Calendar/></div>
                
            </div>

            <h3>{text} orders </h3>

            <div className="SummaryCont">
            <div className="summary">
                <SummaryBox/>
            </div>
            <div className="summary">
                <SummaryBox/>
            </div>
            <div className="summary">
                <SummaryBox/>
            </div>
            </div>

            <div className="navBar">
            <NavBar
          active={4}
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
          ></NavBar>
            </div>
             
        </div>
    )

}

ChefCalendar.defaultProps = {
    text: "December 1st",
}