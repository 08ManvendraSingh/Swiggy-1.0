import { useEffect, useState } from "react";
import { SWIGGY_CUISIENS_SEARCH_SUGG_API } from "../utils/constants";

const useCuisiensSearchSuggestion = (search) => {

    const[searchCuisiensSuggest,setSearchCuisiensSuggest]=useState([]);

    useEffect(()=>{
        fetchData();
    },[search])

    const fetchData=async ()=>{
        const data=await fetch(SWIGGY_CUISIENS_SEARCH_SUGG_API+search+"&trackingId=undefined");
        const json=await data.json();
        console.log(json?.data?.suggestions);
        setSearchCuisiensSuggest(json?.data?.suggestions);
    }

    return searchCuisiensSuggest;
}

export default useCuisiensSearchSuggestion;