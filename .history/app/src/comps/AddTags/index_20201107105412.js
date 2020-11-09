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
   width:280px;
   border-radius: 64px;
   background: #ECECEC;
   padding-top:10px;
`;

const AddInput = styled.input`
    width: 300px;
    height: 40px;
    background-color: #ECECEC;
    border-radius: 64px;
    border:none;   
`;

const SearchImg = styled.div`
    margin:0 10px;
`;



const AddTags = ({}) => {
    return <AddTagsContainer>
        <AddCap>Add categories and tags </AddCap>
        <AddContent>
            <SearchImg><img src='/searchicon.png' /></SearchImg>
            <AddInput type="text" img src='/searchicon.png' />
        </AddContent>
    </AddTagsContainer>
}

AddTags.defaultProps = {
    
}

export default AddTags;