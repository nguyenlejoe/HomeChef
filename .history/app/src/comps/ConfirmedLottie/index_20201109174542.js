import React from 'react';
import Lottie from 'react-lottie';
import animData from '../../confirmed.json';

const ConfirmedLottie = () =>{
    const dO = {
        loop: false,
        autoplay: true, 
        animationData: animData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      return <div>
          <Lottie
            options={dO}
            width={50}
            height={50}
          />
      </div>
}

export default ConfirmedLottie;