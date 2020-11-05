import React from 'react';
import styled, {css} from 'styled-components';

const Menutabcont = styled.div`
height: 84px;
width: 344px;
left: 0px;
top: 0px;
border-radius: 25px;
background: #FFFFFF;
border: 1px solid #E1E1E1;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
cursor:pointer;

`
const ContentContainer = styled.div`
display:flex; 

`

const TabIcon = styled.div`

`

const TabSquare = styled.div`
height: 42px;
width: 42px;
left: 15px;
top: 21px;
border-radius: 10px;
position:relative;
background: #FFFFFF;
box-shadow: -1px 3px 3px rgba(0, 0, 0, 0.25);

`

const TabText = styled.div`
position:relative;
text-align:left;
left:74px;
bottom:17px;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 36px;
`

const EnterIcon = styled.div`
align-items:center;
position:absolute;
left:160%;
top:0px;
`
const MenuTab = ({MenuText}) => {
    
    return <Menutabcont>
        <TabIcon>
                <TabSquare>
                <img src="/currentorders.svg"/>
                </TabSquare>
            </TabIcon>
        
        <ContentContainer> 
            
            <TabText> {MenuText} <EnterIcon>
            <img src="/enter.png"/>
            </EnterIcon> </TabText>
            
        </ContentContainer>
    </Menutabcont>

}

MenuTab.defaultProps = {
    
    MenuText:"Current Orders",

}

export default MenuTab;