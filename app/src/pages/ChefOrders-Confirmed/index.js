import React from 'react';
import './ChefOrders2.scss'
import Button from '../../comps/MainButton';
import SummaryBox from '../../comps/SummaryBox';
import NavBarChef from '../../comps/NavBarChef';





export default function Home() {
  return<div className="app">
    <div className="topbuttons">
        <Button text="Pending Orders" bgcolor="#C4C4C4" radius="40px" width="170px" height="32px" > </Button>
        <Button text="Confirmed Orders" bgcolor="#24B574" radius="40px" width="170px" height="32px" ></Button>

        
    </div>
    <div className="Orderboxes">
    <SummaryBox buyer="Yunus" Quantity="5x" product="Fried Rice" note1="No onions please!"></SummaryBox>
    <br></br>
    <SummaryBox></SummaryBox>
    <br></br>
    <SummaryBox></SummaryBox>

    </div>
    <div className="Nav">
    <NavBarChef active={2}> </NavBarChef>
    </div>
    </div>

}
