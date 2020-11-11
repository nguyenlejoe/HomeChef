import React from 'react';
import styled, {css} from 'styled-components';


const CompContainer = styled.div`
justify-content:center;
align-items:center;
display:column;
position:relative;
`;

const HeadingText = styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height */
position:relative;

color: #1E9761;

`;

const PlusIcon = styled.div`
`;

const AddImage = styled.div`
Width :124px;
Height:88px;
background: #C4C4C4;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
justify-content:center;
align-items:center;
display:flex;
cursor:Pointer;
left:30px;
position:relative;
`;

const AddListingItem = ({text, type, fullDesc, date}) =>{
    return <CompContainer>
        <HeadingText>{text}</HeadingText>
        <AddImage>
            <PlusIcon>
        <img src="additem.png"/>
        </PlusIcon>
        </AddImage>
    </CompContainer>
}

AddListingItem.defaultProps ={
    text:"Add a photo or two of your food!",
   
}

export default AddListingItem;