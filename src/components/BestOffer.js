import { SWIGGY_BANNER_IMG_CDN } from "../utils/constants";

const BestOffer = ({info}) => {

  const{imageId}=info;
    
  return (
    <div className='w-[26rem] mr-4'>
        <img className='w-[100%]' src={SWIGGY_BANNER_IMG_CDN+imageId} alt="" />
    </div>
  )
}

export default BestOffer;