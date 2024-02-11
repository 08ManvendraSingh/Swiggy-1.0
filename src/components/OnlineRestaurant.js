import { SWIGGY_RESTAURANT_IMG_CDN } from "../utils/constants";

const OnlineRestaurant = ({info}) => {

  const{cloudinaryImageId,name,avgRating,cuisines,areaName}=info?.info;
    
  return (
    <div className='w-full rounded-t-2xl hover:scale-95 transition-[all 0.1s ease-in 0s] origin-center'>
        <img className='w-[100%] h-44 rounded-2xl' src={SWIGGY_RESTAURANT_IMG_CDN+cloudinaryImageId} alt="" />
        <div className='p-2'>
            <h3 className='text-[#02060cbf] font-bold text-lg truncate'>{name}</h3>
            <h5 className='text-[#02060cbf] font-semibold text-base'>⭐ {avgRating}</h5>
            <p className='text-[#02060c99] text-base truncate'>{cuisines.join(', ')}</p>
            <p className='text-[#02060c99] text-base truncate'>{areaName}</p>
        </div>
    </div>
  )
}

export default OnlineRestaurant;