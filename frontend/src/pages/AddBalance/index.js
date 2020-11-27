import React, {useState} from 'react';
import Select from 'react-select';
import  './AddBalance.scss';
import Input from '../../comps/PickUp';
import Button from '../../comps/MainButton';
import TopBar from '../../comps/TopBar';
import {useHistory, Link} from "react-router-dom";

const selectCard =[
    {value: 'visa-card', label: 'Visa Card'},
    {value: 'master-card', label: 'Master Card'},

];
const selectMonth=[
    {value: '01', label: '01'},
    {value: '02', label: '02'},
    {value: '03', label: '03'},
    {value: '04', label: '04'},
    {value: '05', label: '05'},
    {value: '06', label: '06'},
    {value: '07', label: '07'},
    {value: '08', label: '08'},
    {value: '09', label: '09'},
    {value: '10', label: '10'},
    {value: '11', label: '11'},
    {value: '12', label: '12'},
];
const selectYear= [
    {value: '21', label: '21'},
    {value: '22', label: '22'},
    {value: '23', label: '23'},
    {value: '24', label: '24'},
    {value: '25', label: '25'},
    {value: '26', label: '26'},
];

export default function AddBalance(){

    const history = useHistory();

    return <div className="appCont">
        <TopBar text="Add Balance" onClick={()=>{
            history.push("/DashBoardGourmet");
        }}/>
        <div className="inputCont">
            <div>
                <p>Card Type*</p>
                <Select className="cardType"
                 options={selectCard}
                 placeholder="Select Card Type"
                 isSearchable/>
            </div>
            <div>
                <p>Card Number*</p>
                <Input PHtext="1234567890101112" radius="5px" width="84vw" height="35px" border="1px" bgcolor="none"/>
            </div>
            <div>
                <p>Card Holder*</p>
                <Input PHtext="Name on card" radius="5px" width="84vw" height="35px" border="1px" bgcolor="none"/>
            </div>
            <div>
                <p>Expire Date*</p>
                <div className="expireDate">
                    <Select className="monthSelect"
                     options={selectMonth}
                     placeholder="Select Month"
                     isSearchable/>
                    <Select className="yearSelect"
                     options={selectYear}
                     placeholder="Select Year"
                     isSearchable/>
                </div>
            </div>
            <div>
                <p>Security Code*</p>
                <Input PHtext="Three numbers back of card" radius="5px" width="84vw" height="35px" border="1px" bgcolor="none"/>
            </div>
            <div className="addBalance">
                <p>Add Balance($)*</p>
                <Input PHtext="$" radius="5px" width="25vw" height="35px" border="1px" bgcolor="none" />
            </div>
        </div>
        <Link to="/DashBoardGourmet" style={{ textDecoration: 'none' }}>
        <Button text="Confirm "
        disabled={false}
        />
        </Link>
    </div>
}