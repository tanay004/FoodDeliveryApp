import React from 'react'

const FoodItemCard = ({info}) => {
    
  return (
    <div className='flex bg-pink-50 p-2 m-2 gap-2 w-72 shadow-md rounded-lg break-words'>
        <img className='w-14 h-10' src = "https://b.zmtcdn.com/data/dish_photos/058/be3adc62ae886b4d8e5f115bea9f7058.png"/>
        <div>
            <h1>{info.name}</h1>
            <h1>₹{Number(info.price)/100}</h1>
        </div>    
        
    </div>
  )
}

export default FoodItemCard