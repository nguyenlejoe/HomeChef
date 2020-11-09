import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
    width: 55px;
    height: 55px;
    background-color: none ;
    border-radius: 32px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border:3px solid #24B574;
`;

const ButtonText = styled.p`
    // text-align: center;
    // justify-content: center;
    font-size: 35px;
    color:#24B574;
`;


const PlusMinus = ({text}) => {
    return <ButtonContainer  >
                <ButtonText>{text}</ButtonText>
            </ButtonContainer>
}

ButtonText.defaultprops = {
    color:null,
}

export default PlusMinus;