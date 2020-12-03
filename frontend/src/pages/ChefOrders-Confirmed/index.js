import React from 'react';
import './ChefOrders2.scss'
import Button from '../../comps/MainButton';
import SummaryBox from '../../comps/SummaryBox';
import NavBarChef from '../../comps/NavBarChef';
import {useHistory, Link} from "react-router-dom";





export default function Home() {

  const history = useHistory();

  return<div className="app">
    <div className="topbuttons">
    <Link style={{ textDecoration: 'none' }} to="/ChefOrdersPending">
        <Button text="Pending Orders" bgcolor="#C4C4C4" radius="40px" width="170px" height="32px" > </Button>
        </Link>
        <Button text="Confirmed Orders" bgcolor="#24B574" radius="40px" width="170px" height="32px" ></Button>
      
      
        
    </div>
    <div className="Orderboxes">
    <SummaryBox foodimg="/friedrice.jpg" buyer="Yunus" Quantity="5x" product="Fried Rice" note1="No onions"></SummaryBox>
    <br></br>
    <SummaryBox note1="Extra noodle" foodimg="/coldnoodle.jpg"></SummaryBox>
    <br></br>
    <SummaryBox  note1="More sauce" foodimg="/coldnoodle.jpg"></SummaryBox>

    </div>
    <div className="Nav">
    <NavBarChef active={2}
    onClickCreate={()=>{
      history.push("/CreateItem");
    }}
    onClickAccount={()=>{
      history.push("/ChefMyAccount");
    }}
    onClickHome={()=>{
      history.push("/DashBoardChef");
    }}
    > </NavBarChef>
    </div>
    </div>

}
