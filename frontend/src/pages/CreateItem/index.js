import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../../context/provider';
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
import BackButton from '../../comps/BackButton';
import AlertBox from '../../comps/AlertBox';




export default function CreateItemPage () {

  const {state, dispatch} = useContext(AppContext);

  const config = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  }



  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");
  const [desc, setDesc] = useState("");
  const [AlertActive, setActive] = useState(true);


  const [product, setProduct] = useState({});
  
  

  const CreateProduct = async()=>{  
    var resp = await axios.post("/api/products/" ,{}, config);

    var grab = await axios.get(`/api/products/${resp.data._id}`)

    setProduct(grab.data);

    console.log(product)
    
  }
  
  const DeleteProduct = async()=>{
    await axios.delete(`/api/products/${product._id}`, config)
  }


  const UpdateProduct = async(product)=>{  

    var update = await axios.put(`/api/products/${product._id}`,
    product, config
    );
  
    console.log(update.data);
  }

// const UploadeImage = async()=>{

//   const imagePost = await axios.post('/api/upload', formData, config)

// }

  return<div className="CreateItemApp">
    <div className="content">

    <div className="Alert">
        <AlertBox active={AlertActive} 
        onClickYes={()=>{
            product.name = name
            product.description = desc
            product.price = price
            product.countInStock = stock
            UpdateProduct(product);
            setActive(true)
        }}
        onClickNo={()=>{
          DeleteProduct();
          setActive(true)
        }}
        
        
        ></AlertBox>
    </div>

    <div className="TopBox">
      <div className="backBox">
        <Link to="/DashBoardChef">
          <BackButton></BackButton>
      </Link>
       </div>
        
        <h3>Create a menu item</h3>

        </div>
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

        {/* <div>
          <SetBox label="Brand"
          onChange={(e)=>{
            setBrand(e.target.value);
          }}
          ></SetBox>
        </div> */}

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
            CreateProduct()
            setActive(false)
          }}
          ></Button>
        </div>

      
    
    </div>
    

    </div>

}
