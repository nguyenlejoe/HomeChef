import React, {useState, useContext, useEffect} from 'react';
import './LoadingPage.scss';
import FoodAnimation from '../../comps/FoodAnimation';
import {useHistory, Link} from "react-router-dom";



export default function LoadingPage() {

    
    return(
        <Link to="/Login">
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
        </Link>
    )
}


