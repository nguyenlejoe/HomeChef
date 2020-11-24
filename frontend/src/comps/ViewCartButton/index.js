import React from 'react';
import styled, {css} from 'styled-components';

const Buttoncont = styled.div`
cursor:pointer;
height: 36px;
width: 260px;
border-radius: 20px;
background: #2B445E;
display:flex;
align-text:center;
justify-content:center;
align-items:center;
`
const Carttxt = styled.div`
display:flex;

`
const Viewcart = styled.div`
color:white;
position:relative;
top:8px;
`

const IconCont = styled.div`
position:relative;
top:6px;
left:10px;
`
const ViewCartButton = ({itemsnum}) => {
    
    return <Buttoncont>
            <Carttxt>
            <Viewcart> View Cart - {itemsnum} items </Viewcart>
            <IconCont>
            <img src="/shopping-cart.png"/>
            </IconCont>
            </Carttxt>
    </Buttoncont>

}

ViewCartButton.defaultProps = {
    
    itemsnum:"2 items",
}

export default ViewCartButton;