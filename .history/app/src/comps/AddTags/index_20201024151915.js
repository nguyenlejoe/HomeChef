import React from 'react';
import styled from 'styled-components';

const AddTagsContainer = styled.div`
   display:flex;
   align-items:center;
   width:270px;
   border-radius: 64px;
   background: #ECECEC;
   height:40px;
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