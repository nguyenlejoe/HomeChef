import React from 'react';
import styled, {css} from 'styled-components';

const Trendingtagcont = styled.div`
display:flex;
align-items:center;
height: 34px;
width: 124px;
background: #6FCF97;
justify-content:center;
border-radius: 39px;


`
const Trendtag = styled.div`
margin:4px;
`

const Trendingtxt = styled.div`
margin:4px;
`
const TrendingTag = ({text}) => {
    
    return <Trendingtagcont>
        <Trendtag> <img src="/tag.svg"/>
        </Trendtag>
        <Trendingtxt>{text}</Trendingtxt>
    </Trendingtagcont>

}

TrendingTag.defaultProps = {
    
    text:"Trending",

}

export default TrendingTag;