import React, {useReducer, useState, useEffect, useContext} from 'react';
import {AppContext} from '../../context/provider';
import './CurrentOrder.scss';
import TopBar from '../../comps/TopBar';
import CurrentOrder from '../../comps/CurrentOrder';
import Button from '../../comps/MainButton';
import NavBarGourmet from '../../comps/NavBarGourmet';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';


export default function CurrentOrderPage(){


  const {state,dispatch} = useContext(AppContext);
  const [orders, setOrders] = useState([]); 

  const HandleOrders = async() =>{

    const config = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };
  
    const resp = await axios.get(`/api/orders/myorders`, config);
    console.log(resp.data);
    setOrders(...[resp.data]);
  }

  useEffect(()=>{
    HandleOrders();
  },[]);


    const history = useHistory();

//     const [teststate, setState]=useReducer(reducer, {})

//     const props = {
//         teststate,
//         setState
//     }
// console.log(state, Object.values(state).some(it => it === true) )
//     function disabled () {
//        return  Object.values(state).some(it => it === true)
//     }

//     function reducer (current, newState) {
//         return {...current, ...newState}
//     }

    return <div className="appCont" onLoad={HandleOrders}>
        <div className="orderCont">
            {orders.map((o,i)=>{
              return<div className="OrderBox">
              <CurrentOrder 
              upTime={o.updatedAt}
              oNumber={o._id}
              price={o.totalPrice}
              bgImg={o.orderItems[0].image}
              ></CurrentOrder>
              </div>
            })}
        </div>
        <div className="pickUp">
        <Button text="Picked Up "
         />
         </div>
          <div className="Nav">
          <NavBarGourmet
            active={3}
            onClickHome={()=>{
              history.push("/DashBoardGourmet");
            }}
            onClickAccount={()=>{
              history.push("/MyAccountGourmet");
            }}
            onClickSearch={()=>{
              history.push("/SearchPage");
            }}
          ></NavBarGourmet>
          </div>
    </div>
}