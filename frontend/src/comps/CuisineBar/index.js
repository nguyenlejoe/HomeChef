import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../MainButton';
import Select from 'react-select';

const optionCuisines= [
    {value: 'turkish' , label: 'Turkish'},
    {value: 'French' , label: 'French'},
    {value: 'Greek' , label: 'Greek'},
    {value: 'Indian' , label: 'Indian'},
    {value: 'Iranian' , label: 'Iranian'},
    {value: 'Chinese' , label: 'Chinese'},
    {value: 'Italian' , label: 'Italian'},
    {value: 'Japanese' , label: 'Japanese'},
    {value: 'Mexican' , label: 'Mexican'},
    {value: 'Korean' , label: 'Korean'},
    {value: 'Taiwanese' , label: 'Taiwanese'},
];

const CuisineNav = styled.div`
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

export function CuisineBar({onClick, onChange,onClickBrand}) {

    function customTheme(theme){
        return{
            ...theme,
            colors: {
                ...theme.colors,
                primary25:'#69ECB1',
                primary:'#24B574'
            }
        }
    }


    return <CuisineNav>
        <Button width= "88px" height= "35px" radius="15px" fontSize= "14px" text="Filter" bgcolor= "#FFFFFF" textColor="#24B574"/>
        
        <Select
            options={optionCuisines}
            theme={customTheme}
            placeholder='Cuisine'
            onChange={onChange}
            onClick={onClickBrand}
        />
        <Button width= "88px" height= "35px" radius="15px" fontSize= "14px" text="20.00" bgcolor= "#FFFFFF" textColor="#24B574" onClick={onClick} disabled={false}/>
    </CuisineNav>
};

export default CuisineBar;