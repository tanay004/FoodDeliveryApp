import { useState, useEffect } from "react";

const useIsLogged = (isLogged)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        setIsLoggedIn(isLogged);
    },[isLogged])

    return isLoggedIn;
}

export default useIsLogged;