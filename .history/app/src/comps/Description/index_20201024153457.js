import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`

`;

const Label = styled.div`
    margin-bottom:10px;
`;
const Input = styled.input`
    width: 350px;
    height: 150px;
    background-color: #ECECEC;
    border-radius: 20px;
    position:relative;
    border:none;
`;

const Max = styled.div`
    position:absolute;
    bottom:10px;
    right:10px;
`;

const Description = ({text}) => {

    return <DescriptionContainer>
        <Label> Description (optional) </Label>
        <Input type="text" placeholder="Describe your item here..."/>
        <Max>Max 350 Characters </Max> 
        </DescriptionContainer>
}

Description.defaultProps = {
    
}

export default Description;