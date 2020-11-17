import React, {useReducer} from 'react';
import './CurrentOrder.scss';
import TopBar from '../../comps/TopBar';
import CurrentOrder from '../../comps/CurrentOrder';
import Button from '../../comps/MainButton';
import NavBarGourmet from '../../comps/NavBarGourmet';
import {useHistory, Link} from "react-router-dom";


export default function CurrentOrderPage(){

    const history = useHistory();

    const [state, setState]=useReducer(reducer, {})

    const props = {
        state,
        setState
    }
console.log(state, Object.values(state).some(it => it === true) )
    function disabled () {
       return  Object.values(state).some(it => it === true)
    }

    function reducer (current, newState) {
        return {...current, ...newState}
    }

    return <div className="appCont">
        <div className="orderCont">
            <CurrentOrder name={"a"} {...props} oNumber="123456" upTime="17/02/2021" location="2126 Hasting Street Burnaby"/>
            <CurrentOrder  name={"b"} {...props}/>
        </div>
        <Button text="Picked Up " disabled={disabled()}
         />
          <div className="Nav">
          <NavBarGourmet
            active={3}
            onClickHome={()=>{
              history.push("/DashBoardGourmet");
            }}
            onClickAccount={()=>{
              history.push("/MyAccountGourmet");
            }}
          ></NavBarGourmet>
          </div>
    </div>
}