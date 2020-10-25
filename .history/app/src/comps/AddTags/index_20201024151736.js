import React from 'react';
import styled from 'styled-components';

const AddTagsContainer = styled.div`
   display:flex;
   width:200px;
   border-radius: 64px;
   background: #ECECEC;
   align-items:center;
   justify-content:center;
`;

const SearchImg = styled.div`
  
`;

const SpicyImg = styled.div`
  
`;

const AddTags = ({text}) => {

    return <AddTagsContainer>
            <SearchImg><img src='/searchicon.png' /></SearchImg>
            <SpicyImg><img src='/spicy.png' /></SpicyImg>
        </AddTagsContainer>
}

AddTags.defaultProps = {
    
}

export default AddTags;