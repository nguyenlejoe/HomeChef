import React from 'react';
import styled, {css} from 'styled-components';
import icon2 from '../../assets/DollarSign.png';

const ButtonContainer = styled.button`
    width: ${props =>props.width ? props.width : '239px'};
    height: ${props =>props.height ? props.height : '60px'};
    background-color: ${props =>props.bgcolor ? props.bgcolor : '#24B574'};
    border-radius: ${props =>props.radius ? props.radius : '5px'};
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border:none;
`;

const ButtonText = styled.p`
    text-align: center;
    font-size: ${props =>props.fontSize ? props.fontSize : '15px'};
    color:${props =>props.textColor ? props.textColor : '#FFFFFF'};
`;


const MainButton = ({onClick,disabled, text,textColor,bgcolor, width, height, radius, fontSize}) => {
    
    return <ButtonContainer onClick={onClick} disabled={disabled} bgcolor = {bgcolor} height={height} width={width} radius={radius}>
                <ButtonText fontSize={fontSize} textColor = {textColor}>{text}</ButtonText>
            </ButtonContainer>
}

MainButton.defaultProps = {
    color:null,
    disabled: true,
}

export default MainButton;