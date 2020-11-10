import React, {useState} from 'react';
import './DishDescription.scss';
import Avatar from '../../comps/Avatar';
import Trending from '../../comps/TrendingTag';
import Input from '../../comps/PickUp';
import Counter from '../../comps/Counter';
import Calendar from '../../comps/Calendar';


export default function DishDescription() {

    return(
        <div>
            <Calendar/>
        </div>
    )
}