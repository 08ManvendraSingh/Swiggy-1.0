import { Link } from "react-router-dom";
import usePreSearch from "../hooks/usePreSearch";
import WhatMind from "./WhatMind";
import { useState } from "react";
import useCuisiensSearchSuggestion from "../hooks/useCuisiensSearchSuggestion";
import { SERCH_SUGGESTION_IMAGE_CDN } from "../utils/constants";
import useSearchSuggestion from "../hooks/useSearchSuggestion";
import { useSearchParams } from "react-router-dom";

const Search = () => {

  const[search,setSearch]=useState("");
  const[search2,setSearch2]=useState("");

  const preSearch=usePreSearch();
  const searchCuisiensSuggest=useCuisiensSearchSuggestion(search);
  const [searchParams, setSearchParams]=useSearchParams();
  const query=searchParams.get("query");

  const searchSuggestion=useSearchSuggestion(query,search2);
  console.log(searchSuggestion);

  if(preSearch.length===0)return null;
  if(searchSuggestion.length===0)return null;
  const{imageGridCards,header}=preSearch?.cards[1]?.card?.card;  

  const cuisiensSearchSuggestion=(entityId)=>{
    const start=entityId.indexOf("=")+1;
    const end=entityId.length;
    const strQuery=entityId.slice(start,end);
    setSearch(strQuery);
  }

  const searchSuggestions=(text,link)=>{
    setSearch(text)
    setSearch2(link);
  }

  return (
    <div className="relative top-20 mb-20 w-full py-5 px-[20%] z-0">
      <div className="sticky w-full left-0 top-20 bg-white pb-2 pt-12">
        <div className="w-full bg-white h-12 border border-[#282c3f33] rounded flex items-center justify-center pl-3">
          <div className="pl-4 flex-1">
            <input value={search} onChange={(e)=>{setSearch(e.target.value)}} className="text-base text-[#686b78] font-medium w-full h-full border-0 outline-0" type="text" placeholder="Search for restaurants and food"/>
          </div>
          <div className="h-5 text-lg text-[#686b78]">
            <span className="before:content-['🔍']"></span>
          </div>
        </div>
      </div>
      <div className="relative w-full -z-10 my-0 mx-auto min-h-[calc(100vh-70px)] bg-white text-[#282c3f] p-4">
      {search=="" ? 
        <><h2 className='text-[#3d4152] font-bold text-xl mb-4'>{header.title}</h2>
        <div className='w-full flex gap-2 overflow-x-scroll no-scrollbar'>
          {imageGridCards?.info.map((x)=><Link key={x.id} onClick={()=>{cuisiensSearchSuggestion(x.entityId)}}><WhatMind data={x}/></Link>)}
        </div></>:
        searchCuisiensSuggest&& searchCuisiensSuggest.map((x)=>
          <Link to={'/home/search?query='+x.text} onClick={()=>{searchSuggestions(x.text,x.cta.link)}}>
            <div key={x.text} className='w-full text-[#282c3f] py-3 pr-4 flex items-center hover:bg-[#f2f6fc]'>
              <img className='w-20 rounded-md mr-4' src={SERCH_SUGGESTION_IMAGE_CDN+x.cloudinaryId} alt="" />
              <div className='flex flex-col'>
                <h3>{x.text}</h3>
                <p className='text-[#7e808c] text-xs'>{x.type}</p>
              </div>
            </div>
          </Link>
        )
      }
      </div>
    </div>
  )
}

export default Search;