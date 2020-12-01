import React from 'react';
import styled from 'styled-components';


const ItemBox=styled.div`
width: 320px;
height: 160px;
display:inline-flex;
align-items:center;
justify-content:center;
background: #F5F5F5;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
border-radius: 33px;
padding: 10px;
`;

const ImageBox = styled.img`
    display: inline-flex;
    width: 40%;
    height: 80%;
    border-radius: 10px;
    object-fit: cover;
`;

const ItemText = styled.div`
display: inline-flex;
flex-direction: column;
align-item: center;
justify-content: space-around;
width: 60%;
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
const CurrentOrder = ({name, state, setState, oNumber, upTime, price, bgImg}) =>{
    
// function select () {
//     setState({[name]: !state[name]})
// }
return (
<ItemBox >
    <ImageBox src={bgImg}/>
    
    <ItemText>
        <p>Order Id : {oNumber} </p>
        {/* <p>Orderd On : {upTime}</p> */}
        <p>Total Price : {price}</p>
        <p><span onClick="">Chef contact details</span></p>
    </ItemText>
</ItemBox>
)
}

CurrentOrder.defaultProps = {
    bgImg: "/friedrice.jpg",
}

export default CurrentOrder;