import React from 'react';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
    display:flex;
    flex-direction:column;
`;

const Label = styled.div`
    margin-bottom:10px;
`;
const Input = styled.input`
    width: 350px;
    height: 150px;
    background-color: #ECECEC;
    border-radius: 20px;
    border:none;
    position:relative;
`;

const Max = styled.div`
    position:absolute;
    top:1px;
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