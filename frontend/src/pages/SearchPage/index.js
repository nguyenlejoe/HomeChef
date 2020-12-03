import React, { useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './SearchPage.scss';
import SearchTwo from '../../comps/SearchTwo';
import FoodDisplayCover from '../../comps/FoodDisplayCover';
import NavBarGourmet from '../../comps/NavBarGourmet';
import BackButton from '../../comps/BackButton';
import {useHistory, Link} from "react-router-dom";
import axios from "axios";


export default function SearchPage() {

  const {state,dispatch} = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const config = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  }

  const history = useHistory();

  const HandleSearch = async(keyword, keybrand) =>{
    var resp = await axios.get(`/api/products?keyword=${keyword}`);

  

    setProducts(...[resp.data.products]);
    console.log(resp.data.products);
  }



  return<div>
   
      <div className="SearchPopup">
        <SearchTwo onClick={HandleSearch} ></SearchTwo>
    </div>
    <div className="foodcovers">

    {products.map((o,i)=>{
           return <Link style={{ textDecoration: 'none' }} to={{ pathname: "/DishDescription", state: {o} }}>
            <div className="foodBox">
           <FoodDisplayCover
           Mealnm={o.name}
           bgimg={o.image}
           MealPrc={o.price}
           ></FoodDisplayCover>
           </div>
           </Link>
          })}
          
    </div>

    
    <div className="Nav">
          <NavBarGourmet
            active={2}
            onClickAccount={()=>{
              history.push("/MyAccountGourmet");
            }}
            onClickOrder={()=>{
              history.push("/CurrentOrderPage");
            }}
            onClickHome={()=>{
              history.push("/DashBoardGourmet");
            }}
          ></NavBarGourmet>
        </div>
{/* <NavBarChef active={1}> </NavBarChef> */}
  </div>


}
