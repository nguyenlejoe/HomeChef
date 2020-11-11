import React from 'react';
import styled, {css} from 'styled-components';
import Avatar from '../Avatar';

const PostContainer = styled.div`
    width:320px;
    height:80px;
    display:flex;
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:75%;

`;
    
const RatingContainer = styled.div`
    height:40%;
    display:flex;
`;
const TitleContainer = styled.div``;

const FullDetailContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;

const AvatarContainer = styled.div`
    width:30%;
`;

const StarBox = styled.div`
    width:10%;
    height:100%;
    background-image:url(/star.png);
    background-repeat:no-repeat;
    background-position:center;
`;

const ActivityPost = ({buyer, type, fullDesc, date}) =>{
    return <PostContainer>
            <AvatarContainer><Avatar></Avatar></AvatarContainer>
            <ContentContainer>
                <RatingContainer>
                    <StarBox></StarBox>
                    <StarBox></StarBox>
                </RatingContainer>
                <TitleContainer>{buyer} submitted a {type}</TitleContainer>
                <FullDetailContainer>
                    <a>View {fullDesc}</a>
                    {date}
                </FullDetailContainer>
            </ContentContainer>
    </PostContainer>
}

ActivityPost.defaultProps ={
    buyer:"Alex",
    type:"review",
    fullDesc:"posting",
    date:"10/20/2020"
}

export default ActivityPost;