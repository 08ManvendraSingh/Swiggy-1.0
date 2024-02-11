import { useState,useEffect } from "react";
import useCordinates from "./useCordinates";
import { SWIGGY_RESMENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const[reastaurantMenuInfo,setReastaurantMenuInfo]=useState([]);
    const[restaurantList,setRestaurantList]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        const data=await fetch(SWIGGY_RESMENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json?.data)
        setReastaurantMenuInfo(json?.data);

        const list=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setRestaurantList(list);
        console.log(list);
    }

  return [reastaurantMenuInfo,restaurantList,setRestaurantList];
}

export default useRestaurantMenu;