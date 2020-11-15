import React from 'react';
import styled from 'styled-components';


const SearchBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;


const SearchTwoInput = styled.input`
    width: 260px;
    height: 35px;
    background-color: #ECECEC;
    border-radius: 20px;
    border:none;
    margin-right:5px;
`;

const SearchTwoImg = styled.div`
   
`;



const SearchTwo = ({}) => {
    return <SearchBox>
        <SearchTwoInput type="text" placeholder=""></SearchTwoInput>
        <SearchTwoImg><img src='/Searchtwo.png'/></SearchTwoImg>
    </SearchBox>;
}

export default SearchTwo;