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
      <MenuTabs bgimg="/mymenuchefmenu.svg"  bgcolor= "coral" iconheight="25px" iconwidth="25px" MenuText="My Menu"></MenuTabs>
      <MenuTabs  bgimg="/creditchefmenu.svg" bgcolor= "lightgreen" MenuText="View Credits" iconheight="25px" iconwidth="25px"></MenuTabs>
      <MenuTabs   bgimg="/reviewchefmenu.svg" bgcolor= "orange" MenuText="Reviews" iconheight="25px" iconwidth="25px"></MenuTabs>
      <MenuTabs  bgimg="/switchchefmenu.svg" bgcolor= "#2B445E" MenuText="Switch to gourmet" iconheight="25px" iconwidth="25px"></MenuTabs>
      <MenuTabs  bgimg="/helpiconmenu.svg" bgcolor= "green" MenuText="Help" iconheight="25px" iconwidth="25px"></MenuTabs>
      <MenuTabs  bgimg="/editchefmenu.svg" MenuText="Edit my profile" iconheight="25px" iconwidth="25px"></MenuTabs>
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