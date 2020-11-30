import React, { useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './DashBoardGourmet.scss'
import TopNav from '../../comps/TopNav';
import FoodDisplayCover from '../../comps/FoodDisplayCover';
import ViewCartButton from '../../comps/ViewCartButton';
import NavBarGourmet from '../../comps/NavBarGourmet';
import CuisineBar from '../../comps/CuisineBar';
import {useHistory, Link} from "react-router-dom";
import axios from "axios";


export default function DashBoardGourmet() {
  
  const {state,dispatch} = useContext(AppContext);

  const [products, setProducts] = useState([]);

  const [brand, setBrand] = useState();

  const HandleData = async() =>{
    var resp = await axios.get(`/api/products`);
    setProducts(...[resp.data.products]);
  }

  const HandleDataBrand = async(keyword) =>{
    var resp = await axios.get(`/api/products?keybrand=${keyword}`);
    setProducts(...[resp.data.products]);
  }

  const history = useHistory();

  function onChangeInput(value){
    setBrand(value.value)
    console.log(brand)
    }

    
  useEffect(()=>{
    HandleData();

  },[]);

  return<div className="DashBoardGourmetApp">
        <div className="CuisineBox">
            <CuisineBar onClick={()=>{
              history.push("/AddBalance");
            }}
            onChange={onChangeInput}
            onClickBrand={()=>{
              alert(brand);
              HandleDataBrand(brand);
            }}
            ></CuisineBar>
        </div>
        <div className="TopNavCon">
          <TopNav></TopNav>
        </div>
        <div className="Content">
          
          {products.map((o,i)=>{
           return <Link style={{ textDecoration: 'none' }} to={{ pathname: "/DishDescription", state: {o} }}>
           <div className="foodCont">
           <FoodDisplayCover
           Mealnm={o.name}
           bgimg={o.image}
           MealPrc={o.price}
           ></FoodDisplayCover>
           </div>
           </Link>
          })}
          
        
        </div>
        
        <div className="Cart">
          <Link to="/Checkout" style={{ textDecoration: 'none' }}>
          <ViewCartButton itemsnum={state.qty}></ViewCartButton>
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
            onClickSearch={()=>{
              history.push("/SearchPage");
            }}
          ></NavBarGourmet>
        </div>
        
        
    </div>

}
