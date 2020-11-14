import React, {useState} from 'react';
import Calendar from '../../comps/Calendar';
import SummaryBox from '../../comps/SummaryBox';
import NavBar from '../../comps/NavBarChef';
import './ChefCalendar.scss';

export default function ChefCalendar({text}) {

    return(
        <div className="appContainer">
            <div className="calendarCont">
                <div className="calendarBox"><Calendar/></div>
                <h3>{text} orders </h3>
            </div>
            <div className="summary">
                <SummaryBox/>
            </div>
            <div className="summary">
                <SummaryBox/>
            </div>
            <div className="summary">
                <SummaryBox/>
            </div>
            <div className="navBar"><NavBar/></div>

        </div>
    )

}

ChefCalendar.defaultProps = {
    text: "December 1st",
}