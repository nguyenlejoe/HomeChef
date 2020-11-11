import React, { useState } from 'react';
import styled, {css} from 'styled-components';

const TopNavContainer = styled.div`
    width: 100%;
    height: 73px;
    background-color:#F4F4F4;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const TopNavButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 65px;
    height: 34px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    transition: flex 0.5s;

    ${props => props.active === true && css`
        flex:0.7;
        transition: flex 0.5s;
        background-color:#FF9900;

    `}



`;

const Icon = styled.div`
    height:70%;
    width:40%;
    background-image:url(${props=>props.bgimg ? props.bgimg : "none"});
    background-repeat:no-repeat;
    background-position:center;
    background-size:auto; 
    
    
`;

const Title = styled.div`
    display:none;
    opacity:0;
    transition: opacity 1s;
    ${props => props.active === true && css`
    opacity:1;
    transition: opacity 1s linear;
    width:45%;
    height:70%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:40px;
    `}

`;


const TopNav = ({}) =>{

    function checkOff(genre){
        switch(genre){
            case "trending":
                setTrendExpand(!TrendExpand);
                setChefExpand(false);
                setDealExpand(false);
                setBestExpand(false);
                
            
                break;
            case "chef":
                setChefExpand(!ChefExpand);
                setTrendExpand(false);
                setDealExpand(false);
                setBestExpand(false);
               
                break;
            case "deal":
                setDealExpand(!DealExpand);
                setTrendExpand(false);
                setChefExpand(false);
                setBestExpand(false);
                break;
            case "best":
                setBestExpand(!BestExpand);
                setTrendExpand(false);
                setChefExpand(false);
                setDealExpand(false);
                break;
        }
    }

    const [TrendExpand, setTrendExpand] = useState(true);
    const [ChefExpand, setChefExpand] = useState(false);
    const [DealExpand, setDealExpand] = useState(false);
    const [BestExpand, setBestExpand] = useState(false);


    return <TopNavContainer>
        <TopNavButton active={TrendExpand} onClick={()=>{
            if(TrendExpand !=true){
                checkOff("trending");
            }
        }}>
            <Icon bgimg="/fire.png"></Icon>
            <Title active={TrendExpand}>Trending</Title>
        </TopNavButton>

        <TopNavButton active={ChefExpand} onClick={()=>{
           if(ChefExpand !=true){
            checkOff("chef");
           }
        }}>
            <Icon bgimg="/chefIcon.png"></Icon>
            <Title active={ChefExpand}>Chefs</Title>
        
        </TopNavButton>

        <TopNavButton active={DealExpand} onClick={()=>{
            if(DealExpand !=true){
            checkOff("deal");
            }
        }}>
            <Icon bgimg="/deal.png"></Icon>
            <Title active={DealExpand}>Deals</Title>

        </TopNavButton>
        

        <TopNavButton active={BestExpand} onClick={()=>{
           if(BestExpand !=true){
            checkOff("best");
            }
        }}>
            <Icon bgimg="/best.png"></Icon>
            <Title active={BestExpand}>Best</Title>


        </TopNavButton>
    </TopNavContainer>
}

export default TopNav;