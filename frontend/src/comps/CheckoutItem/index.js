import React from 'react';
import styled, {css} from 'styled-components';

const Checkoutitemcont = styled.div`

max-width:330px;
max-height:76px;


`
const Carttxt = styled.div`
display:flex;
flex-direction:row;
`
const Quantity = styled.div`
Margin-right: 60px;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: left;

`

const ItemName = styled.div`
Margin-right: 90px;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: left;

`

const ChefNote = styled.div`
color: #2B445E;
cursor:pointer;

`

const Price = styled.div`
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: left;

`

const Delete = styled.div`

`

const Bottomhr = styled.div`
height: 0px;
width: 341px;
border-radius: nullpx;
border: 1px solid #2B445E;
margin-top:29px;

`

const Iconcont = styled.div `
position:relative;
left:10px;
`









const CheckoutItem = ({Quant, Itemnm, Note, Pricetag, onClick}) => {
    
    return <Checkoutitemcont>
            <Carttxt>
            <Quantity>{Quant}</Quantity>
            <ItemName>{Itemnm}<ChefNote>   {Note}</ChefNote></ItemName>
            <Price>{Pricetag}</Price>
            <Iconcont onClick={onClick}>
            <img src="/trash-2.svg"/>
            </Iconcont>
            </Carttxt>
            <Bottomhr>

            </Bottomhr>
    </Checkoutitemcont>

}

CheckoutItem.defaultProps = {
    
    Quant:"1x",
    Itemnm:"Yunus' Fried Rice",
    Note:"Add Note for Chef",
    Pricetag:"$12.99",

}

export default CheckoutItem;