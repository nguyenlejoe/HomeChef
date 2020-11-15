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
    width:276px;
    height:35px;
    border-radius: 64px;
    background: #ECECEC;
    border:none;
`;

const SearchImg = styled.div`
  
`;

const AddTags = ({}) => {
    return <AddTagsContainer>
        <AddCap>Add categories and tags </AddCap>
        <AddContent>
            <SearchImg><img src='/searchicon.png' /></SearchImg>
            <SearchInput type="text" placeholder="" /> 
            {/* <SpicyImg><img src='/spicy.png' /></SpicyImg> */}
        </AddContent>
    </AddTagsContainer>
}

AddTags.defaultProps = {
    
}

export default AddTags;