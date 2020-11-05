import React from 'react';
import './CreateItem.scss';
import Input from '../comps/SignUp';
import Tags from '../comps/AddTags';
import Desc from '../comps/Description';
import Note from '../comps/BuyerNote';
import PickDate from '../comps/UpDate';
import PickTime from '../comps/UpTime';
import Button from '../comps/MainButton';



export default function CreateItemPage() {
  return<div className="app">
    <div className="content">
      <h3>Create a menu item</h3>
      <div className="InputBox">
       <Input PHtext="Enter Food Name"></Input>
      </div>
      <div className="TagBox">
        <Tags></Tags>
      </div>
      <div className="descBox">
        <Desc></Desc>
      </div>
      <div className="noteBox">
        <Note></Note>
      </div>
      <div className="dateBox">
        <PickDate></PickDate>
      </div>
      <div className="timeBox">
        <PickTime></PickTime>
      </div>
      <div className="buttonBox">
        <Button text="Create Item"></Button>
      </div>

    
    
    
    </div>
    

    </div>

}
