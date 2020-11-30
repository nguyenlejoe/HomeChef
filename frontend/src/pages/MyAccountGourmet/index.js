import React from 'react';
import './MyAccountGourmet.scss'
import NavBarGourmet from '../../comps/NavBarGourmet';
import Avatar from '../../comps/Avatar';
import MenuTab from '../../comps/MenuTab';
import {useHistory, Link} from "react-router-dom";




export default function MyAccountGourmetPage({name}) {

  const history = useHistory();

  return<div className="MyAccountGourmetApp">
        <div className="TopBar">
            <Avatar></Avatar>
            <h3>{name}</h3>
        </div>
        <div className="content">
          <div className="MyAccountButton">
            <Link to="/CurrentOrderPage" style={{ textDecoration: 'none', color:'#474747' }}>
              <MenuTab  bgimg="/currentordersiconmenu.svg" iconheight="34px" iconwidth="34px"></MenuTab>
            </Link>           
            <Link to="/CurrentOrderPage" style={{  textDecoration: 'none', color:'#474747' }}>
              <MenuTab bgcolor= "#178C58" bgimg="/historyiconmenu.svg" MenuText="Order History"  iconheight="34px" iconwidth="34px"></MenuTab>
            </Link>           
            <Link to="/GourmetFavorites" style={{  textDecoration: 'none', color:'#474747' }}>
              <MenuTab bgcolor= "#2B445E" bgimg="/stariconmenu.svg" MenuText="Favorites"  iconheight="34px" iconwidth="34px"></MenuTab>
            </Link>
            <Link  style={{  textDecoration: 'none', color:'#474747' }}>
              <MenuTab  bgcolor= "#24B574" bgimg="/helpiconmenu.svg" MenuText="Help"  iconheight="34px" iconwidth="34px"></MenuTab>
            </Link>
            <Link to="/CreateAccountChef" style={{  textDecoration: 'none', color:'#474747' }}>
              <MenuTab  bgimg="/Chefhaticon.svg"MenuText="Become a Chef"  iconheight="34px" iconwidth="34px"></MenuTab>
            </Link>          
            <Link to="/Login"  style={{ textDecoration: 'none', color:'#474747' }}>
              <MenuTab  bgimg="/logout.svg" bgcolor= "#EF4800" MenuText="Log Out" iconheight="25px" iconwidth="25px" />
            </Link>
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

MyAccountGourmetPage.defaultProps = {
  name:"Alex Inglis",
}