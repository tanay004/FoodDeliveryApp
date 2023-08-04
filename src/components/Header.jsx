import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useIsLogged from "../util/useIsLogged";

import { useSelector } from "react-redux";

const Heading = ()=>{
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [temp, setTemp] = useState(false);
    const isLogged = useIsLogged(temp);
    
    const cartItems = useSelector(store=> store.cart.items);
    
    return (
     <div className="flex justify-between p-2 bg-pink-50 shadow-md">
     <a href="/"><img className="h-16 w-24" id="title-img" alt="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0FzWLdzlrL3sETO99mNCl6RQ8YQlqNCtwDQ&usqp=CAU"/></a>
     <ul className="flex p-2 items-center">
         <li className="px-2"><Link to="/">Home</Link></li>
         <li className="px-2"><Link to="/about">About</Link></li>
         <li className="px-2"><Link to="/contact">Contact</Link></li>
         <li className="px-2"><Link to="/instamart">Instamart</Link></li>
     </ul> 
     <ul className="flex items-center ">
        <li className="px-2">Cart-{cartItems.length} items</li>
     </ul>
     </div>
    );
 } 

 export default Heading;