import React, {useState} from 'react';
import './CurrentOrder.scss';
import TopBar from '../../comps/TopBar';
import CurrentOrder from '../../comps/CurrentOrder';
import Button from '../../comps/MainButton';


export default function CurrentOrderPage(){
    return <div className="appCont">
        <TopBar text="Current Order"/>
        <div className="orderCont">
            <CurrentOrder/>
            <CurrentOrder/>
        </div>
        <Button text="Picked Up "/>
    </div>
}