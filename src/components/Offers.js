import { Link } from "react-router-dom";
import OnlineRestaurant from "./OnlineRestaurant";
import Shimmer from "./Shimmer";
import useOffersGetList from "../hooks/useOffersGetList";
// import useCordinates from "../hooks/useCordinates";

const Offers = () => {

  // const [restaurantSecondApi,setRestaurantSecondApi,showRestaurantSecondApi]=useCordinates();
  // console.log(restaurantSecondApi,setRestaurantSecondApi,showRestaurantSecondApi);

  // const handleFilter=(label)=>{
  //   console.log(label);
  //   if(label==='Fast Delivery'){
  //       const filter=showRestaurantSecondApi.filter((a)=>a).sort(function(x,y){return x?.info?.sla?.deliveryTime - y?.info?.sla?.deliveryTime});
  //       console.log(filter);
  //   }
  //   else if(label==='Ratings 4.0+'){
  //       const filter=showRestaurantSecondApi.filter((x)=>x?.info?.avgRating>4);
  //       setRestaurantSecondApi(filter);
  //   }
  //   else if(label==='New on Swiggy'){
  //       const filter=showRestaurantSecondApi.filter((x)=>x?.info?.avgRating==="");
  //       setRestaurantSecondApi(filter);
  //   }
  //   else if(label==='Pure Veg'){
  //       const filter=showRestaurantSecondApi.filter((x)=>x?.info?.veg===true);
  //       setRestaurantSecondApi(filter);
  //   }
  //   else if(label==="Rs. 300-Rs. 600"){
  //       const filter=showRestaurantSecondApi.filter((x)=>x?.info?.costForTwo.split(' ')[0]);
  //       console.log(filter);
  //   }
  //   else if(label==="Less than Rs. 300"){
  //       const filter=showRestaurantSecondApi.filter((x)=>x?.info?.costForTwo.split(' ')[0]);
  //       console.log(filter);
  //   }
  //   else{}

  // }

  const handleFetchOffer=()=>{
    const offerGetList=useOffersGetList();
  }

  return(
    <div className='lg:px-40 md:px-20 px-10 relative top-24 mb-28'>

        {/* { secondApi?.map((x)=>x?.card?.card?.id==="popular_restaurants_title" &&
        <div className='px-8 pt-12 border-t border-gray-400'>
            <h3 className='text-2xl text-[#02060ceb] font-bold'>{x.card.card.title}</h3>
        </div>)
        }

        { secondApi?.map((x)=>x?.card?.card?.['@type']==="type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget" &&
            <div className='w-full h-11 px-8 flex gap-2 mt-6 mx-auto overflow-x-auto no-scrollbar'>
                {x?.card?.card?.facetList?.map((x)=>!x.openFilter &&
                    x.facetInfo.map((x)=>x.openFilter &&
                    <div onClick={()=>handleFilter(x.label)} className='whitespace-nowrap text-[#02060cbf] border border-[#e2e2e7] py-2 px-3 rounded-3xl'>
                        {x.label}
                    </div>)
                )}
            </div>)
        }

        {
            <div className='w-full flex justify-between items-center flex-wrap no-scrollbar px-8 py-6 border-b border-gray-400'>
                {restaurantSecondApi.map((x)=><Link className='lg:w-1/4 md:w-2/4 w-full mb-4' to={"/home/restaurant/"+x.info.id} key={x.info.id} ><OnlineRestaurant info={x}/></Link>)}
            </div>
        } */}

        <button onClick={()=>handleFetchOffer()} className="py-4 px-36  mx-auto border border-[#02060c1a] rounded-xl flex justify-center items-center">
          <div className="leading-5 font-bold text-base text-[#02060cbf] -tracking-[0.3px]">Show more</div>
          <div className="h-5 mt-[1px] ml-[2px]">∨</div>
        </button>

    </div>
  )
}

export default Offers