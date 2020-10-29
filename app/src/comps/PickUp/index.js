import React from 'react';
import styled from 'styled-components';

const InputCont = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    
`;

const InputText = styled.h2`
    margin-bottom: 5px;
    font-family: sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: ${props=>props.color ? props.color : "#1E9761"};

`;

const InputForm = styled.input`
    font-family: sans-serif;
    text-align: center;
    background-color: #ECECEC;
    ::placeholder{
        color: #A5A5A5};
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 10px 0px 10px 0 px;
`;

const Input = ({text, PHtext, color}) => {
    return <InputCont>
        <InputText text="Set pick up Time">{text, color}</InputText>
        <InputForm type="text" placeholder={PHtext}></InputForm>
    </InputCont>;
}

export default Input;  