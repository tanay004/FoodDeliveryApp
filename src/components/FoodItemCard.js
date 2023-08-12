import React from 'react';
import { GrAddCircle } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { addItem } from "../util/cartSlice";


const FoodItemCard = ({info}) => {
  const dispatch = useDispatch();
  var price; 
  if(info.price) {
    price = Number(info.price)/100;
  }
  else if(info.defaultPrice){
    price= Number(info.defaultPrice)/100;
  }
  else price = 150;
  const addFoodItem = (item)=>{
    dispatch(addItem(item));
  }
  return (
    <div className='flex bg-pink-50 p-2 m-2 gap-2 w-72 shadow-md rounded-lg break-words items-center relative'>
        <img alt="NA" className='w-16 h-14 rounded-lg' src = {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+info.imageId}/>
        <div>
            <h1>{info.name}</h1>
            <h1>₹{price}</h1>
        </div>
        <span className='absolute bottom-2 right-2 cursor-pointer p-1' onClick={addFoodItem}><GrAddCircle/></span>
                
    </div>
  )
}

export default FoodItemCard