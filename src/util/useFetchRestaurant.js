import React, { useEffect, useState } from 'react'

const useFetchRestaurant = (url) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    //const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=>{
        getRestaurants();
    },[])

    async function getRestaurants(){
        const data = await fetch(url);
        const json = await data?.json();
        var allRes = [];
        json?.data?.cards.map((item)=>{
            if(item?.card?.card?.gridElements?.infoWithStyle?.restaurants){
                allRes = allRes.concat(item?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
        })
        var finalArr =[];
        var s = new Set();
        allRes.map((item)=>{
            if(!s.has(item.info.id)){
                s.add(item.info.id);
                finalArr.push(item);
            }
        })
        //console.log(json);
        setAllRestaurants(finalArr);
        //setFilteredRestaurants(finalArr);
        //console.log(finalArr);
        //setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return allRestaurants;
}

export default useFetchRestaurant