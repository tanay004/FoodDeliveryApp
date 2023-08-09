import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import Shimmmer from "./Shimmer";
import useRestaurant from "../util/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../util/cartSlice";
import FoodItemCard from "./FoodItemCard";


const RestaurantMenu = ()=> {

    const {id} = useParams();
    const restaurant = useRestaurant(id);
    const dispatch = useDispatch();

    const addFoodItem = (item)=>{
        dispatch(addItem(item));
    }
    var foodItems = [];
    var titles = [];
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((resItem,index)=>{
        if(resItem?.card?.card?.title){
            
            titles.push(resItem?.card?.card?.title);
            if(resItem?.card.card.categories){
                var temp = [];
                resItem?.card?.card?.categories.map((category)=>{
                    temp.push(...category?.itemCards);
                })
                foodItems.push([...temp]);
                
            }
            else{
                foodItems.push([...resItem.card.card.itemCards])
            }
            
        }
    })
    
    
    return (!restaurant) ? (<Shimmmer/>) : (
        <div >
            <div className="relative h-96">
                <img className="w-full h-96 opacity-60" src = {IMG_CDN_URL+ restaurant.cards[0].card.card.info.cloudinaryImageId} width="400px"/>
                <div className="absolute bottom-9 left-10 space-y-3 text-gray-600">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl font-bold">{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                        <h1 className="text-2xl font-semibold">Restaurant Id: {id}</h1>
                    </div>
        <div className="flex gap-10">
                        <h3 className="text-2xl font-semibold">{restaurant?.cards[0]?.card?.card?.info?.areaName}</h3>
                        <h3 className="text-2xl font-semibold">Cost For Two: {restaurant?.cards[0]?.card?.card?.info?.costForTwo} </h3>
                    </div>
                    
                </div>
                
            </div>
            <div className="px-4">
                <h1 className=" font-bold text-4xl">Menu</h1>
                <div className="py-2">
                    {
                        titles.map((title, index)=>{
                            return (
                                <div className="py-4">
                                    <h1 className="font-semibold text-xl">{title}</h1>
                                    <div className="flex flex-wrap">
                                        {foodItems[index].map((foodItem)=>{
                
                                            return <FoodItemCard info={foodItem.card.info}/>
                                        })}
                                    </div>
                                    
                                </div>
                                
                                  
                            )  
                       })
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;