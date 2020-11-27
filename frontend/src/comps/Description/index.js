import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    font-family: Poppins;
    display:flex;
    flex-direction:column;
    position:relative;
    width:280px;
`;

const DescriptionCap = styled.div`
    color: #1E9761;
    margin-bottom:10px;
`;
const DesInput = styled.input`
    width: 280px;
    height: 120px;
    margin-bottom: 5px;
    border: 1px solid #C0C0C0;
    border-radius: 20px;
`;



const Max = styled.div`
    position:absolute;
    right:10px;
    bottom:-20px;
    font-size:13px;
`;

const Description = ({text, onChange}) => {

    return <DescriptionContainer>
        <DescriptionCap>Description (optional)</DescriptionCap>
        <DesInput onChange={onChange} type="text" placeholder="   Describe your item here..." />
        <Max>Max 350 Characters </Max> 
        </DescriptionContainer>
}

Description.defaultProps = {
    
}

export default Description;