import React from 'react';
import styled from 'styled-components';
import Input from '../PickUp';
import Text from '../PickUpText';

const MainCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InputCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const UpDate = () => {
    return <MainCont>
        <Text text="Set pick up date"/>
        <InputCont>
        <Input PHtext="MM" width="93px" height="34px"/>
        <Input PHtext="DD" width="93px" height="34px"/>
        <Input PHtext="YY" width="93px" height="34px"/>
        </InputCont>
    </MainCont>
};

export default UpDate;