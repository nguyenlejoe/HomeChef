import React from 'react';
import './chefmyaccount.scss'
import MenuTabs from '../../comps/MenuTab';
import NavBarChef from '../../comps/NavBarChef';
import {useHistory, Link} from "react-router-dom";
import CoverImage from '../../comps/CoverImage';





export default function Home() {

  const history = useHistory();

  return<div className="app">
      <div className="CoverBox">
        <CoverImage bgimg="/alex.jpg"></CoverImage>
      </div>
        <div className="ChefDesc">
            <h2>Alex Inglis</h2>
            <p>Chef from Australia</p>
        </div>


      <div className="optionCont">
      <MenuTabs MenuText="My Menu"></MenuTabs>
      <MenuTabs MenuText="View Credits"></MenuTabs>
      <MenuTabs MenuText="Reviews"></MenuTabs>
      <MenuTabs MenuText="Switch to gourmet"></MenuTabs>
      <MenuTabs MenuText="Help"></MenuTabs>
      <MenuTabs MenuText="Edit my profile"></MenuTabs>
      </div>


      <div className="Nav">
    <NavBarChef active={5}
    onClickCreate={()=>{
      history.push("/CreateItem");
    }}
    onClickHome={()=>{
      history.push("/DashBoardChef");
    }}
    onClickOrder={()=>{
      history.push("/ChefOrdersPending");
    }}
    onClickCalendar={()=>{
      history.push("/ChefCalendar");
    }}
    > 
    </NavBarChef>
    </div>
    </div>
}