import React, {useState} from 'react';
import './LoadingPage.scss';
import FoodAnimation from '../../comps/FoodAnimation';



export default function LoadingPage() {
    return(
        <div className="loadingCont">
            <div className="logoCont">
                <div className="Logo"></div>
            </div>
            <div className="bottomCont">
                <div className="animationCont">
                    <FoodAnimation/>
                </div>

            </div>

        </div>
    )
}


