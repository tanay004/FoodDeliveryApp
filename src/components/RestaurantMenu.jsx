import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmmer from "./Shimmer";
import useRestaurant from "../util/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlice";

const RestaurantMenu = ()=> {

    const {id} = useParams();
    const restaurant = useRestaurant(id);
    const dispatch = useDispatch();

    const addFoodItem = (item)=>{
        dispatch(addItem(item));
    }
    
    return (!restaurant) ? (<Shimmmer/>) : (
        <div className="flex gap-10">
            <div>
                <h1>Restaurant Id: {id}</h1>
                <h2 className="font-bold">{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                <h3>{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                <img src = {IMG_CDN_URL+ restaurant.cards[0].card.card.info.cloudinaryImageId} width="400px"/>
                <h3>Cost For Two: {restaurant?.cards[0]?.card?.card?.info?.costForTwo}</h3>
            </div>
            <div>
                <h1 className="font-bold">Menu</h1>
                <ul>
                    {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card?.itemCards.map((item,index) =>(
                        <li key={index}>{item?.card?.info?.name}- <button className="bg-green-100 p-1 m-1" onClick={()=>addFoodItem(item)}>Add</button></li>
                    ))} 
                        
                        
                </ul>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;