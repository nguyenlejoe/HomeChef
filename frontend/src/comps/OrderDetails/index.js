import React from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';

const DetailsContainer = styled.div`
  display:flex;
  flex-direction:column;

`;

const Chefname = styled.div`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
color: #2B445E;
left:20px;
position:relative;
`

const DetailsRectangle = styled.div`
background-color: #FFFFFF;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
height: 285px;
width: 339px;
left: 0px;
top: 37px;
border-radius: 33px;
flex-direction:column;
`

const OrderNumber = styled.div`
font-family: Poppins;
margin-top:15px;
margin-bottom:15px;
font-weight: 500;
font-size: 19px;
line-height: 28px;
color: #000000;
`

const Pickuptxt = styled.div`
font-family: Poppins;
margin-top:15px;
margin-bottom:15px;
font-weight: 500;
font-size: 19px;
line-height: 28px;
color: #000000;
`

const Location = styled.div`
font-family: Poppins;
margin-top:15px;
margin-bottom:15px;
font-weight: 500;
font-size: 19px;
line-height: 28px;
color: #000000;
`
const Contact = styled.div`
font-family: Poppins;
margin-top:20px;
margin-bottom:10px;
font-weight: 500;
font-size: 19px;
line-height: 28px;
color: #2B445E;
text-decoration:underline;
cursor:pointer;
`
const FullDetails = styled.div`
font-family: Poppins;
margin-top:30px;
margin-bottom:10px;
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: #2B445E;
cursor:pointer;
`
const Detailstxtboxs = styled.div`
position: relative;
left:20px;
top:20px;

`

const Photocont = styled.div`
z-index:1;
position:relative;
left:300px;
size:105px;
`


const OrderDetails = ({Chef, OrderNum, Pickupdate, Locationtxt, profileimg}) => {
    
    return <DetailsContainer>
        <Chefname> {Chef} </Chefname>
        <DetailsRectangle>
            <Detailstxtboxs>
            <OrderNumber>Order Number: {OrderNum}</OrderNumber>
            <Pickuptxt>Pick up time: {Pickupdate} </Pickuptxt>
            <Location>Location: {Locationtxt} </Location>
            <Contact>Chef Contact Details</Contact>
            <FullDetails>View full order details</FullDetails>
            </Detailstxtboxs>
            <Photocont>
            <Avatar bgimg={profileimg}></Avatar>
            </Photocont>
        </DetailsRectangle>
    </DetailsContainer>

}

OrderDetails.defaultProps = {
    
    Chef:"CHEF Alex Inglis",
    OrderNum: "203948271",
    Pickupdate:"10/22/2020",
    Locationtxt:"2456 Hastings St"

}

export default OrderDetails;