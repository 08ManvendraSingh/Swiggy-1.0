import { useEffect,useState } from "react";
import { SWIGGY_LOCATION_API } from "../utils/constants";

const useLocation = (locations) => {
    console.log(locations);

  const [suges, setSuges] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getLocationSugestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [locations]);

  const getLocationSugestions = async () => {
    const datas = await fetch(SWIGGY_LOCATION_API + locations);
    const json = await datas.json();
    setSuges(json.data);
  };
    
  return suges;
}

export default useLocation;