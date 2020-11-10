import React from 'react';
import Lottie from 'react-lottie';
import animData from '/confirmed.json';

const ConfirmedLottie = () =>{
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
          />
      </div>
}

export default ConfirmedLottie;