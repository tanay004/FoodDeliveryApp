import { IMG_CDN_URL } from "./config";

const RestaurantCard = ({locality, name, cloudinaryImageId, costForTwo})=>{
    
    return(
        <div className="p-2 m-2 w-80 bg-pink-50">
            <img alt="BK img" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-lg">{name}</h2>
            <h3>{costForTwo}</h3>
            <h4>{locality}</h4>
            
        </div>
    );
} 

export default RestaurantCard;