import React from 'react';
import './MyAccountGourmet.scss'
import NavBarGourmet from '../../comps/NavBarGourmet';
import Avatar from '../../comps/Avatar';
import MenuTab from '../../comps/MenuTab';
import {useHistory, Link} from "react-router-dom";




export default function MyAccountGourmetPage() {

  const history = useHistory();

  return<div className="MyAccountGourmetApp">
        <div className="TopBar">
            <Avatar></Avatar>
            <h3>Alex Inglis</h3>
        </div>
        <div className="content">
          <div className="Button">
            <MenuTab  bgimg="/currentordersiconmenu.svg" iconheight="34px" iconwidth="34px"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab bgcolor= "#178C58"bgimg="/historyiconmenu.svg" MenuText="Order History"  iconheight="34px" iconwidth="34px"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab bgcolor= "#2B445E" bgimg="/stariconmenu.svg" MenuText="Favorites"  iconheight="34px" iconwidth="34px"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab  bgcolor= "#24B574" bgimg="/helpiconmenu.svg" MenuText="Help"  iconheight="34px" iconwidth="34px"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab  bgimg="/Chefhaticon.svg"MenuText="Become a Chef"  iconheight="34px" iconwidth="34px"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab bgimg="/MenuTabOrderHistory.svg"MenuText="Terms of Service"></MenuTab>
          </div>
        </div>
        <div className="Nav">
          <NavBarGourmet
            active={4}
            onClickHome={()=>{
              history.push("/DashBoardGourmet");
            }}
            onClickOrder={()=>{
              history.push("/CurrentOrderPage");
            }}
            onClickSearch={()=>{
              history.push("/SearchPage");
            }}
          ></NavBarGourmet>
        </div>
        
        
    </div>

}
