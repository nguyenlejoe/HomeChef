import React from 'react';
import styled, {css} from 'styled-components';
import ActivityPost from '../ActivityPost';

const ActivityBox = styled.div`
    display:flex;
    flex-direction:column;
    width:338px;
    height:414px;
    background: #FAFAFA;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding:10px;
    justify-content:space-between;
    
    
`;

const ActivityFeed = () =>{
    return <ActivityBox>
        <ActivityPost></ActivityPost>
        <ActivityPost></ActivityPost>
        <ActivityPost></ActivityPost>
        <ActivityPost></ActivityPost>
    </ActivityBox>
}

export default ActivityFeed;