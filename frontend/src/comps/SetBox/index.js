import React from 'react';
import styled from 'styled-components';

const SetCont = styled.div`
width:169px;
height:200px
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

const InputBox = styled.input`
width: 100px;
height: 30px;
left: 29px;
border: 1px solid #C0C0C0;
border-radius: 20px;
`;

const LabelCont = styled.div`
margin-bottom:6px;
`;


const SetBox = ({placeH, label, onChange}) =>{
    return <SetCont>
        <LabelCont><label>Set {label}</label></LabelCont>
        <InputBox onChange={onChange} placeholder={placeH}/>
    </SetCont>
}

SetBox.defaultProps={
    label:"price"
}

export default SetBox;