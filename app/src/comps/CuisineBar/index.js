import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../MainButton';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const CuisineNav = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    `;


const selectCuisine =[
    {value: 'turkish', label: 'Turkish'},
    {value: 'France', label: 'France'},
    {value: 'Greek', label: 'Greek'},
    {value: 'Indian', label: 'Indian'},
    {value: 'Iranian', label: 'Iranian'},
    {value: 'Vietnamese', label: 'Vietnamese'},
    {value: 'Chinese', label: 'Chinese'},
    {value: 'Italian', label: 'Italian'},
    {value: 'Japanese', label: 'Japanese'},
    {value: 'Mexican', label: 'Mexican'},
    {value: 'Korean', label: 'Korean'},
    {value: 'Malaysian', label: 'Malaysian'},
    {value: 'Taiwanese', label: 'Taiwanese'},
    {value: 'Filipino', label: 'Filipino'},

];

function customTheme(theme) {
    return{
        ...theme,
        colors: {
            ...theme.colors,
            primary: '#24B574',
        },
    }
}

const CuisineBar = () =>{
    return <CuisineNav>
        <Button width= "88px" height= "35px" radius="15px" fontSize= "14px" text="Filter" bgcolor= "#FFFFFF" textColor="#24B574"/>
        <Select 
            placeholder="Cuisine"
            theme={customTheme} 
            options={selectCuisine}
            autoFocus
            isSearchable 
            className={"select"}
        />
        <Button width= "88px" height= "35px" radius="15px" fontSize= "14px" text="$20.00" bgcolor= "#FFFFFF" textColor="#24B574"/>
    </CuisineNav>
};

export default CuisineBar;