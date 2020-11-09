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
background-image:url(${props=>props.bgImg ? props.bgImg : '/food.png'});
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
const CurrentOrder = ({name, state, setState, oNumber, upTime, location, bgImg}) =>{
    
function select () {
    setState({[name]: !state[name]})
}
return (
<ItemBox onClick={select} style={{border: state[name] ? "3px solid #24B574" : ""}} >
    <ItemImage bgImg={bgImg}></ItemImage>
    <ItemText>
        <p>Order number : {oNumber} </p>
        <p>Pick up time : {upTime}</p>
        <p>Location : {location}</p>
        <p><span onClick="">Chef contact details</span></p>
    </ItemText>
</ItemBox>
)
}



export default CurrentOrder;