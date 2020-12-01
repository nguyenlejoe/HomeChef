import React from 'react';
import styled from 'styled-components';

const AddTagsContainer = styled.div`
    font-family: Poppins;
    
`;

const AddCap = styled.div`
    color: #1E9761;
    margin-bottom: 10px;
`;

const AddContent = styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
`;


const SearchInput = styled.input`
    width:280px;
    height:35px;
    border-radius: 64px;
    border: 1px solid #C0C0C0;
    border-radius: 20px;
`;

const SearchImg = styled.img`
  
`;

const AddTags = ({PHtext , onChange}) => {
    return <AddTagsContainer>
        <AddCap> Food's country of origin </AddCap>
        <AddContent>
            {/* <SearchImg src='/searchicon.png'/> */}
            <SearchInput  onChange={onChange} type="text" placeholder={PHtext} /> 
            {/* <SpicyImg><img src='/spicy.png' /></SpicyImg> */}
        </AddContent>
    </AddTagsContainer>
}

AddTags.defaultProps = {
    PHtext: "   Search"
}

export default AddTags;