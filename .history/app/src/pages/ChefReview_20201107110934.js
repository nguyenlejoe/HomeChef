import React from 'react';
import './ChefPage.scss'
import NavBarGourmet from '../comps/NavBarGourmet';
import Avatar from '../comps/Avatar';
import RatingContainer from '../comps/ActivityPost';




export default function Home() {
  return<div className="app">
        <div className="CoverImage"></div>
        <div className="ChefDesc">
            <h2>Alex Inglis</h2>
            <p>Lived in the bog for 7 years. fuck you alex</p>
        </div>
        <div className="AvatarBox">
                <Avatar></Avatar>
                <a>Reviews</a>
        </div>
        <div className="ReviewList">
            <div className="review">
                <div className="AvatarBox">
                    <Avatar></Avatar>
                </div>
            </div>
            <div className="ReviewCont">
                <div className="ReviewProfile"><Avatar></Avatar>Lisa L</div>
                <RatingContainer>
                    <StarBox></StarBox>
                    <StarBox></StarBox>
                    <StarBox></StarBox>
                    <StarBox></StarBox>
                    <StarBox></StarBox>
                </RatingContainer>
                <div>Yunus is a fried rice genius! You need to try his food at least once for your life</div>    
            </div>
            <div className="review">
                <div className="AvatarBox">
                    <div>
                         <Avatar></Avatar>
                    </div>
                   
                </div>
            </div>
            <div className="review">
                <div className="AvatarBox">
                    <Avatar></Avatar>
                </div>
            </div>
        </div>
        
        <div className="Nav">
          <NavBarGourmet
          bgimg = "/Search.png"
          title = "Search"
          btnState = {true}
          orderActive = {true}
          ></NavBarGourmet>
        </div>
        
        
    </div>

}
