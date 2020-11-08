import React from 'react';
import './ChefReview.scss'
import NavBarGourmet from '../comps/NavBarGourmet';
import AvatarContainer from '../comps/Avatar';


export default function Home() {
  return<div className="app">
        <div className="CoverImage"></div>
        <div className="ChefDesc">
            <h2>Alex Inglis</h2>
            <p>Lived in the bog for 7 years. fuck you alex</p>
        </div>
        <div className="AvatarBox">
                <AvatarContainer></AvatarContainer>
                <a>Reviews</a>
        </div>
        <div className="ReviewList">
            <div className="ReviewCont">
                <div className="ReviewProfile"><AvatarContainer width="30px" height="30px"></AvatarContainer><a>Lisa L</a></div>
                <div className="rating">
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                </div>
                <div>Yunus is a fried rice genius! You need to try his food at least once for your life</div>    
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
