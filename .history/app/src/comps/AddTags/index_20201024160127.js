import React from 'react';
import styled from 'styled-components';

const AddTagsContainer = styled.div`

`;

const AddContent = styled.div`
   display:flex;
   align-items:center;
   width:270px;
   border-radius: 64px;
   background: #ECECEC;
`;

const SearchImg = styled.div`
    margin:0 10px;
`;

const SpicyImg = styled.div`
  
`;

const AddTags = ({}) => {
    return <AddTagsContainer>
        Add categories and tags 
        <AddContent>
            <SearchImg><img src='/searchicon.png' /></SearchImg>
            <SpicyImg><img src='/spicy.png' /></SpicyImg>
        </AddContent>
    </AddTagsContainer>
}

AddTags.defaultProps = {
    
}

export default AddTags;