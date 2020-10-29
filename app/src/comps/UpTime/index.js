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
    // justify-content: center;
`;

const UpTime = () => {
    return <MainCont>
        <Text text="Set pick up time"/>
        <InputCont>
        <Input PHtext="11:00" width="137px" height="34px"/>
        <Input PHtext="AM" width="52px" height="34px"/>
        </InputCont>
    </MainCont>
};

export default UpTime;