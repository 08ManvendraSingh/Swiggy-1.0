import { useEffect, useState } from 'react';
import { SWIGGY_SUPPORT_API } from '../utils/constants';

const useSupport = () => {

  const [support,setSupport]=useState([]);

  useEffect(()=>{
    fetchSupport();
  },[])

  const fetchSupport=async()=>{
    const data=await fetch(SWIGGY_SUPPORT_API);
    const json=await data.json();

    setSupport(json?.data?.issueTypes);
    console.log(json.data.issueTypes);
  }

  return support;
}

export default useSupport;