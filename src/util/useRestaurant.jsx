import {useState, useEffect} from "react";

const useRestaurant = (id)=>{
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9020408&lng=75.7357806&restaurantId="+id+"&submitAction=ENTER");
        const json = await data.json();
        //console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[7].card.card.itemCards)
        setRestaurant(json.data);    
    }
    return restaurant;
}

export default useRestaurant;