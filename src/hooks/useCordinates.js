import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import {SWIGGY_CORDINATES_API, SWIGGY_RESTAURANT_LIST_API} from '../utils/constants';

function useCordinates() {

    const location = useLocation();
    const [firstApi,setFirstApi]=useState([]);

    const [secondApi,setSecondApi]=useState([]);
    const [restaurantSecondApi,setRestaurantSecondApi]=useState([]);
    const [showRestaurantSecondApi,setShowRestaurantSecondApi]=useState([]);
  
    useEffect(()=>{
      getpalceid();
    },[location.state.place_id.id]);
  
    const getpalceid=async()=>{
      const data=await fetch(SWIGGY_CORDINATES_API+location.state.place_id.id);
      const json=await data.json();
  
      const datas=await fetch(SWIGGY_RESTAURANT_LIST_API+json.data[0]?.geometry?.location.lat+"&lng="+json.data[0]?.geometry?.location.lng+"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsons=await datas.json();
  
      setFirstApi(json.data[0]);
  
      console.log(jsons.data.cards);
      setSecondApi(jsons.data.cards);

      const restaurants=jsons?.data?.cards?.filter((x)=>x?.card?.card?.id==="restaurant_grid_listing");
      setShowRestaurantSecondApi(restaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantSecondApi(restaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return [firstApi,secondApi,restaurantSecondApi,setRestaurantSecondApi,showRestaurantSecondApi];
  }

  export default useCordinates;