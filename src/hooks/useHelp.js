import {useState,useEffect} from 'react';
import { SWIGGY_HELP_API } from '../utils/constants';

const useHelp = (query) => {

    const [issue,setIssue]=useState([]);
  
    useEffect(()=>{
      fetchHelp();
    },[query])
  
    const fetchHelp=async()=>{
      const data2=query===""? await fetch(SWIGGY_HELP_API+"partner-onboarding?"): await fetch(SWIGGY_HELP_API+query+"?");
      const json2=await data2.json();
  
      setIssue(json2?.data?.issues);
      console.log(json2?.data?.issues);
    }

    return issue;
}

export default useHelp;