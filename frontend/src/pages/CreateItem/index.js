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
  const [uploading, setUploading] = useState(false)

  const config = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload/', formData, config)

      setImage(data)
      setUploading(false)
      console.log(image)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
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
                product.image = image
                UpdateProduct(product);
                setActive(true)
              }}
              onClickNo={()=>{
                DeleteProduct();
                setActive(true)
              }}/>
      </div>

      <div className="TopBox">
        <div className="backBox">
          <Link to="/DashBoardChef">
            <BackButton/>
          </Link>
        </div>
        <h3>Create a menu item</h3>
      </div>

      <div className="InputBox">
        <Input PHtext="Enter Food Name"
          onChange={(e)=>{
            setName(e.target.value);
          }}/>
      </div>

      <div className="TagBox">
        <Tags PHtext="   Search"/>
      </div>

      <div className="descBox">
        <Desc
          onChange={(e)=>{
            setDesc(e.target.value);
          }}/>
      </div>

      <div className="InputPrice">
        <SetBox
          placeH="   $10.00"
          onChange={(e)=>{
            setPrice(e.target.value);
          }}/>
        <SetBox 
          placeH="   4"
          label="quantity"
          onChange={(e)=>{
            setStock(e.target.value);
          }}/>
      </div>

          {/* <div>
            <SetBox label="Brand"
            onChange={(e)=>{
              setBrand(e.target.value);
            }}
            ></SetBox>
          </div> */}

      <div className="addPhotoBox">
        <AddListingItem
          onChange={(e)=>{
            // setImage(e.target.value);
            uploadFileHandler(e)
          }}/>
        {/* <input type="file"
            onChange={(e)=>{
              // setImage(e.target.value);
              uploadFileHandler(e)
            }}/> */}
      </div>

      <div className="noteBox">
        <Note/>
      </div>

      <div className="dateBox">
        <PickDate/>
      </div>

      <div className="timeBox">
        <PickTime/>
      </div>

      <div className="buttonBox">
        <Button text="Create Item"
          disabled={false}
          onClick={()=>{
            CreateProduct()
            setActive(false)
          }}/>
      </div>
    </div>
  </div>
}
