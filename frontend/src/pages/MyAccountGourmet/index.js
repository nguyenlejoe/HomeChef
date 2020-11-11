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
            <MenuTab></MenuTab>
          </div>
          <div className="Button">
            <MenuTab  MenuText="Order History"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab MenuText="Favorites"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab MenuText="Help"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab MenuText="Become a Chef"></MenuTab>
          </div>
          <div className="Button">
            <MenuTab MenuText="Terms of Service"></MenuTab>
          </div>
        </div>
        <div className="Nav">
          <NavBarGourmet
            active={4}
            onClickHome={()=>{
              history.push("/DashBoardGourmet");
            }}
          ></NavBarGourmet>
        </div>
        
        
    </div>

}
