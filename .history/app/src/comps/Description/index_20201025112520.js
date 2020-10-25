import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    font-family: Poppins;
    display:flex;
    flex-direction:column;
    position:relative;
    width:350px;
`;

const DescriptionCap = styled.div`
    color: #1E9761;
    margin-bottom:10px;
`;
const DesInput = styled.input`
    width: 350px;
    height: 150px;
    background-color: #ECECEC;
    border-radius: 20px;
    border:none;
    position:relative;
    ::placeholder {
        position:absolute;
        top:5px;
      }

`;



const Max = styled.div`
    position:absolute;
    right:10px;
    bottom:-20px;
    font-size:13px;
`;

const Description = ({text}) => {

    return <DescriptionContainer>
        <DescriptionCap>Description (optional)</DescriptionCap>
        <DesInput type="text" placeholder="Describe your item here..." />
        <Max>Max 350 Characters </Max> 
        </DescriptionContainer>
}

Description.defaultProps = {
    
}

export default Description;