import React from 'react';
import Lottie from 'react-lottie';
import animData from '../../foodAnimation.json';

const FoodAnimation = () =>{
    const dO = {
        loop: true,
        autoplay: true, 
        animationData: animData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      return <div>
          <Lottie
            options={dO}
            width={250}
            height={250}
          />
      </div>
}

export default FoodAnimation;