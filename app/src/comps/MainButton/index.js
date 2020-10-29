import React from 'react';
import styled, {css} from 'styled-components';

const ButtonContainer = styled.button`
    background-color: #24B574;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border:none;
    padding: 0px 45px 0px 45px;
`;

const ButtonText = styled.p`
    text-align: center;
    font-size: 15px;
    color:#FFF;
`;

const Button = ({text,color,bgcolor, width, height}) => {
    return <ButtonContainer color = {bgcolor} height={height} width={width}>
                <ButtonText color = {color}>{text}</ButtonText>
            </ButtonContainer>
}

ButtonText.defaultprops = {
    color:null,
}

export default Button;