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
    text-align: center;
    ::placeholder{
        color: #A5A5A5};
    border: 1px solid #C0C0C0;
    border-radius: 20px; 
`;

const Input = ({PHtext, width, height}) => {
    return <InputCont>
        <InputForm type="text" placeholder={PHtext} width={width} height={height}></InputForm>
    </InputCont>;
}

export default Input;  