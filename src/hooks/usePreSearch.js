import React, { useEffect, useState } from 'react'
import { SWIGGY_PRE_SEARCH_API } from '../utils/constants';

const usePreSearch = () => {
    
    const[preSearch,setPreSearch]=useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async ()=>{
        const data=await fetch(SWIGGY_PRE_SEARCH_API);
        const json=await data.json();
        console.log(json?.data)
        setPreSearch(json?.data);
    }

  return preSearch;
}

export default usePreSearch;