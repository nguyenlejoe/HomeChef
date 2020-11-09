import React from 'react';
import styled from 'styled-components';

const InputCont = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    
`;
const InputForm = styled.input`
    width: ${props =>props.width ? props.width : '93px'};
    height: ${props =>props.height ? props.height : '34px'};
    font-family: sans-serif;
    text-align: left;
    background-color: ${props =>props.bgcolor ? props.bgcolor : '#ECECEC'};
    ::placeholder{
        padding-left:5px;
        color: #A5A5A5;
        font-size:15px};
    border-radius: ${props =>props.radius ? props.radius : '20px'};
    border: #cacaca solid ${props =>props.border ? props.border : '0px'};
`;

const Input = ({PHtext, width, height, radius, border, bgcolor}) => {
    return <InputCont>
        <InputForm type="text" placeholder={PHtext} width={width} height={height} radius={radius} border={border} bgcolor={bgcolor}></InputForm>
    </InputCont>;
}

export default Input;  