import React from 'react';
import styled from 'styled-components';


const ItemBox=styled.div`
width: 87vw;
height: 160px;
display:inline-flex;
align-items:center;
justify-content:center;
background: #F5F5F5;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 33px;
padding: 10px;
`;

const ItemImage = styled.div`
display: inline-flex;
`;

const ItemText = styled.div`
display: inline-flex;
flex-direction: column;
align-item: center;
justify-content: space-around;
padding: 10px;
p{
    margin: 8px;
    font-size: 13px;
    font-family: sans-serif;
}
span{
color: #2B445E;

}
`;
const CurrentOrder = ({name, state, setState}) =>{
    
function select () {
    setState({[name]: !state[name]})
}
return (
<ItemBox onClick={select} style={{border: state[name] ? "3px solid #24B574" : ""}} >
    <ItemImage><img src='/food.png' /></ItemImage>
    <ItemText>
        <p>Order number : 203948271 </p>
        <p>Pick up time : 10/09/2020</p>
        <p>Location : 2456 Hastings st</p>
        <p><span>Chef contact details</span></p>
    </ItemText>
</ItemBox>
)
}



export default CurrentOrder;