import { SWIGGY_RESMENU_CAUROUSEL_CDN } from "../utils/constants";

const RestaurantMenuCarousel = ({ data }) => {
  const { creativeId } = data;

  return (
    <div className="w-full mr-12">
      <div className="w-96">
        <img
          className="w-full"
          src={SWIGGY_RESMENU_CAUROUSEL_CDN + creativeId}
          alt=""
        />
      </div>
    </div>
  );
};

export default RestaurantMenuCarousel;
