import { useEffect, useState } from "react";
import {SWIGGY_OFFER_GETLIST_API} from '../utils/constants';

function useOffersGetList() {

    const [offerGetListApi,setOfferGetListApi]=useState([]);
  
    useEffect(()=>{
      getOffersList();
    },[]);
  
    const getOffersList=async()=>{
      const data=await fetch(SWIGGY_OFFER_GETLIST_API);
      const json=await data.json();
  
      setOfferGetListApi(json);
      console.log(json);
    }

    return getOffersList;
  }

  export default useOffersGetList;