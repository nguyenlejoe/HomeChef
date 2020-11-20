import React from 'react';
import './EditMenuItems.scss';
import BackButton from '../../comps/BackButton';
import Avatar from '../../comps/Avatar';
import EditMenu from '../../comps/EditMenu';
import EditMenuItem from '../../comps/EditMenu';





export default function Home() {
  return<div className="app">
    <div className="backbutton">
    <BackButton></BackButton>
    </div>
    
    <div className="HeadingTxt">
   Alex Ingy's Menu 
    </div>
    
  <div className="Avatar">
    <div>
      <Avatar></Avatar>
    </div>
    </div>
  
  <div className="EditMenuComps">
  <EditMenu></EditMenu>

  </div>



  </div>

}