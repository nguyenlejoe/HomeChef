import React, { useState }from 'react';
import './CreateItem.scss';
import Input from '../../comps/SignUp';
import Tags from '../../comps/AddTags';
import Desc from '../../comps/Description';
import Note from '../../comps/BuyerNote';
import PickDate from '../../comps/UpDate';
import PickTime from '../../comps/UpTime';
import Button from '../../comps/MainButton';
import AddListingItem from '../../comps/AddListingItem';
import SetBox from '../../comps/SetBox';
import {useHistory, Link} from "react-router-dom";
import axios from 'axios';



export default function CreateItemPage() {



  const [name, setName] = useState("");
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const [stock, setStock] = useState("");
  const [desc, setDesc] = useState("");
  const [brand, setBrand] = useState("");
  
  const HandleProduct = async(name,price,image,brand,stock,desc) =>{
    var resp = await axios.post("/api/products" ,{
      name:name,
      price:price,
      image:image,
      brand:brand,
      countInStock:stock,
      description:desc
    });
  }

  return<div className="CreateItemApp">
    <div className="content">
        
        <h3>Create a menu item</h3>
        <div className="InputBox">
        <Input PHtext="Enter Food Name"
        onChange={(e)=>{
          setName(e.target.value);
        }}
        ></Input>
        </div>
        <div className="TagBox">
          <Tags></Tags>
        </div>
        <div className="descBox">
          <Desc
          onChange={(e)=>{
            setDesc(e.target.value);
          }}
          ></Desc>
        </div>

        <div className="InputPrice">
          <SetBox
          onChange={(e)=>{
            setPrice(e.target.value);
          }}
          ></SetBox>
          <SetBox label="quantity"
          onChange={(e)=>{
            setStock(e.target.value);
          }}
          ></SetBox>
        </div>

        <div>
          <SetBox label="Brand"
          onChange={(e)=>{
            setBrand(e.target.value);
          }}
          ></SetBox>
        </div>

        <div className="addPhotoBox">
          <AddListingItem></AddListingItem>
          <input type="file"
          onChange={(e)=>{
            setImage(e.target.value);
          }}
          ></input>
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
          <Button text="Create Item"
          disabled={false}
          onClick={()=>{
            HandleProduct(name,desc,stock,image,brand,price);
          }}
          ></Button>
        </div>

      
    
    </div>
    

    </div>

}
