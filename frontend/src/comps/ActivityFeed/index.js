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
        <ActivityPost date="12/8/2020"></ActivityPost>
        <ActivityPost buyer="Semi" type="order" bgimg="/person5.jpg" date="12/6/2020"></ActivityPost>
        <ActivityPost buyer="Milan" bgimg="/person2.jpg" date="12/2/2020"></ActivityPost>
        <ActivityPost buyer="Yunus" type="order" bgimg="/person3.jpg" date="11/12/2020"></ActivityPost>
    </ActivityBox>
}

export default ActivityFeed;