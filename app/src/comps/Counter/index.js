import React, {useState} from 'react';
import styled from 'styled-components';
import PlusMinus from '../PlusMinus';



function Counter(){

    const countCont = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    `;
    const countNum = styled.p`

    `;

    const [count,setCount] = useState(1)

    function minusCount() {
        setCount(prevCount => prevCount -1)
    }

    function plusCount() {
        setCount(prevCount => prevCount +1)
    }
    
    return <countCont>
            <PlusMinus onClick={minusCount} text="-"/>
            <countNum>{count}</countNum>
            <PlusMinus onClick={plusCount} text="+"/>
        </countCont>
    

    
}

export default Counter;