import React, { useState, useEffect } from 'react';
import './DashBoardGourmet.scss'
import TopNav from '../../comps/TopNav';
import FoodDisplayCover from '../../comps/FoodDisplayCover';
import ViewCartButton from '../../comps/ViewCartButton';
import NavBarGourmet from '../../comps/NavBarGourmet';
import CuisineBar from '../../comps/CuisineBar';
import {useHistory, Link} from "react-router-dom";
import axios from "axios";


export default function DashBoardGourmet() {
  

  const [products, setProducts] = useState([]);

  const HandleData = async() =>{
    var resp = await axios.get(`/api/products`);
    setProducts(...[resp.data.products]);
    console.log(resp.data.products);
  }


  

  const history = useHistory();



  return<div className="DashBoardGourmetApp" onLoad={HandleData}>
        <div className="CuisineBox">
            <CuisineBar></CuisineBar>
        </div>
        <div className="TopNavCon">
          <TopNav></TopNav>
        </div>
        <div className="Content">
          
          {products.map((o,i)=>{
           return <Link style={{ textDecoration: 'none' }} to={{ pathname: "/DishDescription", state: {o} }}>
           <FoodDisplayCover
           Mealnm={o.name}
           bgimg={o.image}
           MealPrc={o.price}
           ></FoodDisplayCover>
           </Link>
          })}
          
        
        </div>
        
        <div className="Cart">
          <Link to="/Checkout" style={{ textDecoration: 'none' }}>
          <ViewCartButton></ViewCartButton>
          </Link>
        </div>
  
        <div className="Nav">
          <NavBarGourmet
            active={1}
            onClickAccount={()=>{
              history.push("/MyAccountGourmet");
            }}
            onClickOrder={()=>{
              history.push("/CurrentOrderPage");
            }}
          ></NavBarGourmet>
        </div>
        
        
    </div>

}
