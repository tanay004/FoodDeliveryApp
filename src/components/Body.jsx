import React, {useEffect, useState, useContext} from "react";
import RestaurantCard from "./Card"; 
import Shimmmer from "./Shimmer";
import { Link } from "react-router-dom";
import useIsOnline from "../util/useIsOnline"


const Body = ()=>{
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const isOnline = useIsOnline();
    
    function handleChange(event){
        const newValue= event.target.value;
        setSearchText(newValue);
        sessionStorage.setItem("searchText", newValue);
    }
    function handleClick(){
        const filterData = allRestaurants.filter((restaurant)=>
             restaurant.data?.name?.toLowerCase().includes(searchText.toLocaleLowerCase())    
        );

        setFilteredRestaurants(filterData);
    }

    useEffect(() =>{
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9020408&lng=75.7357806&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    if(!allRestaurants) return null;
    
    
    if(!isOnline) return <h1>Check Your Internet Connection</h1>

    return allRestaurants?.length===0 ?(<Shimmmer/>) :
     (
        <div>
        <div className="p-2 bg-pink-100 my-4">
            <input type="text" className="p-2 hover:bg-slate-400" placeholder="Search" value={sessionStorage.getItem("searchText")} onChange={handleChange}/>
            <button className="mx-2 p-2 rounded-md bg-purple-400 hover:bg-black text-white" onClick={handleClick}>Search</button>
            
        </div>
        <div className="flex flex-wrap items-center justify-between px-10">
            {filteredRestaurants.map((restaurantItem)=>{
                return (
                    <Link to ={"/restaurant/"+restaurantItem.info.id} key={restaurantItem.info.id}><RestaurantCard {...restaurantItem.info} /></Link>
                );
        })  }
        </div> 
        </div>
   
     
    );
}

export default Body;