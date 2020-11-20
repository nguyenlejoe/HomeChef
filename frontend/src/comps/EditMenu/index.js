import React from 'react';
import styled, {css} from 'styled-components';


const EditMenuComp = styled.div`
width: 308px;
height: 148px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`

const EditButton = styled.div`

`

const EditComp = styled.div`
width: 308px;
height: 137px;
background: #FFFFFF;
border: 0.2px solid #C4C4C4;
box-sizing: border-box;
border-radius: 20px;
`

const FoodName = styled.div`
position:relative;
left: 20px;
top: 10px;
`

const FoodDescbox = styled.div`

`

const FoodDesc = styled.div`

`

const ExternalLink = styled.div`

`





const EditMenuItem = ({Mealnm, MealPrc, bgimg}) => {
    
    return <EditMenuComp>
        <EditButton> </EditButton>
        <EditComp bgimg={bgimg}>
        <FoodName> {Mealnm} </FoodName>
            
        <FoodDescbox>
            <FoodDesc></FoodDesc>
        </FoodDescbox>

        <ExternalLink>
            <p>View Full Dish</p>
        </ExternalLink>

        </EditComp>
        
    </EditMenuComp>

}

EditMenuItem.defaultProps = {
    
    Mealnm:"Joe's Pho",
    MealPrc: "$12.99",
    bgimg : "./JoesPho.png",
   

}

export default EditMenuItem;