import React, {useState} from 'react';
import styled from 'styled-components';
import PlusMinus from '../PlusMinus';



function Counter(){

    const CounterCont = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 50vw;
    `;
    const CounterNum = styled.p`
        font-size: 24px;
    `;

    const [count,setCount] = useState(1)

    function minusCount() {
        setCount(prevCount => prevCount -1)
    }

    function plusCount() {
        setCount(prevCount => prevCount +1)
    }
    
    return <CounterCont>
            <PlusMinus onClick={minusCount} text="-"/>
            <CounterNum>{count}</CounterNum>
            <PlusMinus onClick={plusCount} text="+"/>
        </CounterCont>
    

    
}

export default Counter;