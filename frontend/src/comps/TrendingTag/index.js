import React from 'react';
import styled, {css} from 'styled-components';

const Trendingtagcont = styled.div`
display:flex;
align-items:center;
height: ${props =>props.height ? props.height : '28px'} ;
width: ${props =>props.width ? props.width : '100px'};
color:${props =>props.textColor ? props.textColor : '#333333'}; 
background: ${props =>props.bgcolor ? props.bgcolor : '#6FCF97'};
font-size: ${props =>props.fontSize ? props.fontSize : '12px'};
justify-content:start;
border-radius: 39px;
margin: 5px;
padding-left: 3px;

`;
const Trendtag = styled.div`
margin:4px;
`;

const Trendingtxt = styled.div`
margin:4px;
`;
const TrendingTag = ({text, color, bgcolor, width, height, fontSize}) => {
    
    return <Trendingtagcont color={color} bgcolor={bgcolor} width={width} height={height} fontSize={fontSize}>
        <Trendtag> <img src="/tag.svg"/>
        </Trendtag>
        <Trendingtxt>{text}</Trendingtxt>
    </Trendingtagcont>

}

TrendingTag.defaultProps = {
    
    text:"Trending",

}

export default TrendingTag;