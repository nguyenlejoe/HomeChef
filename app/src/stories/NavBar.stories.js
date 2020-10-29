import React from 'react';
import NavBar from '../comps/NavBar';




export default {
    title:'Example/NavBar',
    component: NavBar
};

export const ChefNavBar = () => <NavBar 
    bgimg = "/orderIcon.png"
    title = "Orders"
></NavBar>

export const GourmetNavBar = () => <NavBar
    bgimg = "/Search.png"
    title = "Search"
    btnState = {true}
    orderActive = {true}

>
    
</NavBar>
