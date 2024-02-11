import { useEffect, useState } from "react";
import { SWIGGY_SEARCH_SUGGESTION_API } from "../utils/constants";

const useSearchSuggestion = (query,search2) => {

    const[searchSuggestion,setSearchSuggestion]=useState([]);
    console.log(search2);

    useEffect(()=>{
        fetchData();
    },[search2])

    const fetchData=async ()=>{
        const data=await fetch(SWIGGY_SEARCH_SUGGESTION_API+query+"&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=d82047d0-7f92-b791-a265-b89154d6d4a6&"+search2.split('&')[1]);

        const json=await data.json();
        console.log(json?.data);
        setSearchSuggestion(json?.data);
    }

    return searchSuggestion;
}

export default useSearchSuggestion;