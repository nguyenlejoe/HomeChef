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
                <SummaryBox foodimg="/friedchicken.jpg" personimg="/person2.jpg"  buyer="Milan" note1="Extra sauce" product="Fried Chicken"/>
            </div>
            <div className="summary">
                <SummaryBox foodimg="/friedrice.jpg" personimg="/person5.jpg" buyer="Semi" note1="Extra Pepper" product="Fried Rice"/>
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
          onClickHome={()=>{
            history.push("/DashBoardChef");
          }}
          ></NavBar>
            </div>
             
        </div>
    )

}

ChefCalendar.defaultProps = {
    text: "December 1st",
}