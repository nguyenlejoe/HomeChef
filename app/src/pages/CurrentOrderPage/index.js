import React, {useReducer} from 'react';
import './CurrentOrder.scss';
import TopBar from '../../comps/TopBar';
import CurrentOrder from '../../comps/CurrentOrder';
import Button from '../../comps/MainButton';


export default function CurrentOrderPage(){
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
        <TopBar text="Current Order"/>
        <div className="orderCont">
            <CurrentOrder name={"a"} {...props} oNumber="123456" upTime="17/02/2021" location="2126 Hasting Street Burnaby"/>
            <CurrentOrder  name={"b"} {...props}/>
        </div>
        <Button text="Picked Up " disabled={disabled()}
         />
    </div>
}