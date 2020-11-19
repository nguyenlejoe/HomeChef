import React, {useState} from 'react';
import styled from 'styled-components';
import PlusMinus from '../PlusMinus';

// Counter for Dish Description Page

const Counter = ({countItem, onChange, plus, minus, count}) =>{


    const CounterCont = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 50vw;
    `;
    const CounterNum = styled.p`
        font-size: 24px;

    `;

    // const [count,setCount] = useState(1)

    // function minusCount() {
    //     count > 1 &&
    //     setCount(prevCount => prevCount -1)
    // }

    // function plusCount() {
    //     setCount(prevCount => prevCount +1)
    // }
    
    return <CounterCont>
            <PlusMinus onClick={minus} text="-"/>
            <CounterNum>{count}</CounterNum>
            <PlusMinus onClick={plus} text="+"/>
        </CounterCont>
    

    
}

export default Counter;