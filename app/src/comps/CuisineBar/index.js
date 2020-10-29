import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../MainButton';

const CuisineNav = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

const CuisineBar = () =>{
    return <CuisineNav>
        <Button width= "88px" height= "35px" radius="15px" fontSize= "14px" text="Filter" bgcolor= "#FFFFFF" textColor="#24B574"/>
        <Button width= "155px" height= "44px" fontSize= "18px" text = "Cuisine" radius="20px"/>
        <Button width= "88px" height= "35px" radius="15px" fontSize= "14px" text="20.00" bgcolor= "#FFFFFF" textColor="#24B574"/>
    </CuisineNav>
};

export default CuisineBar;