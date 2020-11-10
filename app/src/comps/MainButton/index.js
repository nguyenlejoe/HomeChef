import React from 'react';
import styled, {css} from 'styled-components';
import icon2 from '../../assets/DollarSign.png';

const ButtonContainer = styled.button`
    width: ${props =>props.width ? props.width : '239px'};
    height: ${props =>props.height ? props.height : '60px'};
    background-color: ${props =>!props.disabled ? props.bgcolor : '#24B574'};
    border-radius: ${props =>props.radius ? props.radius : '5px'};
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border:none;
`;

const ButtonText = styled.p`
    text-align: center;
    font-size: ${props =>props.fontSize ? props.fontSize : '15px'};;
    color:${props =>props.textColor ? props.textColor : '#FFFFFF'};
`;

const Icon = styled.div`
    ${() => css`
        background-image: url(${props =>props.icon1 ? props.icon1 : icon2});
        background-color:white;
        padding:10px;
        background-repeat: no-repeat;
        background-position: center;
        position:absolute;
        left: 0px;
        `}
    `;

const Button = ({disabled, text,textColor,bgcolor, width, height, radius, fontSize}) => {
    console.log('disabled', disabled)
    
    return <ButtonContainer disabled={disabled} bgcolor = {bgcolor} height={height} width={width} radius={radius}>
                <ButtonText fontSize={fontSize} textColor = {textColor}>{text}</ButtonText>
            </ButtonContainer>
}

ButtonText.defaultprops = {
    color:null,
    disabled: true,
}

export default Button;