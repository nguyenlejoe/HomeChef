import React, {useState} from 'react';
import './DishDescription.scss';
import Avatar from '../../comps/Avatar';
import Trending from '../../comps/TrendingTag';
import Input from '../../comps/PickUp';
import Counter from '../../comps/Counter';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function DishDescription() {

    const[selectedDate, setSelectedDate] = useState(null)
    return(
        <div className="appCont">
            <div className="foodImg">

            </div>
                
            <DatePicker 
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)}
                inline
                minDate= {new Date()}
            />
            
        </div>
    )
}