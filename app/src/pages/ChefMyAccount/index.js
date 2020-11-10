import React from 'react';
import './chefmyaccount.scss'
import MenuTabs from '../../comps/MenuTab';
import NavBarChef from '../../comps/NavBarChef';





export default function Home() {
  return<div className="app">
      <div className="CoverImage"></div>
        <div className="ChefDesc">
            <h2>Alex Inglis</h2>
            <p>Chef from Australia</p>
        </div>


      <div>
      <MenuTabs MenuText="My Menu"></MenuTabs>
      <MenuTabs MenuText="View Credits"></MenuTabs>
      <MenuTabs MenuText="Reviews"></MenuTabs>
      <MenuTabs MenuText="Switch to gourmet"></MenuTabs>
      <MenuTabs MenuText="Help"></MenuTabs>
      <MenuTabs MenuText="Edit my profile"></MenuTabs>
      </div>


      <div className="Nav">
    <NavBarChef active={5}> </NavBarChef>
    </div>
    </div>
}