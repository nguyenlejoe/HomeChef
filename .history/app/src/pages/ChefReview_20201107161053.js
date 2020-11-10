import React from 'react';
import './ChefReview.scss'
import NavBarGourmet from '../comps/NavBarGourmet';
import Avatar from '../comps/Avatar';

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
            <div className="ReviewCont">
                <div className="ReviewProfile"><Avatar></Avatar><a>Lisa L</a></div>
                <div className="rating">
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                    <div className="stars"><img src='/star.png' /></div>
                </div>
                <div>Yunus is a fried rice genius! You need to try his food at least once for your life</div>    
            </div>
            <div className="ReviewCont">
                <div className="ReviewProfile"><Avatar width="40px" height="40px"></Avatar><a>Lisa L</a></div>
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
