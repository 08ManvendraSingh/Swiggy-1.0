import Shimmer from "./Shimmer";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
// import RestaurantNestedMenuList from "./RestaurantNestedMenuList";
import { useState } from "react";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCoupon from "./RestaurantCoupon";
import RestaurantMenuCarousel from "./RestaurantMenuCarousel";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  //   const[vegNonvegBtn,setVegNonvegBtn]=useState(false);
  const { resId } = useParams();
  const [restaurantMenuInfo, restaurantList, setRestaurantList] =
    useRestaurantMenu(resId);

  if (restaurantMenuInfo.length === 0) {
    return <Shimmer />;
  }
  console.log(restaurantMenuInfo, restaurantList);

  const {
    name,
    areaName,
    avgRating,
    costForTwoMessage,
    cuisines,
    expectationNotifiers,
    totalRatingsString,
    sla,
  } = restaurantMenuInfo?.cards[0]?.card?.card?.info;
  const { offers } =
    restaurantMenuInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const { cards } =
    restaurantMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const vegTag = cards?.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
  );
  const ResMenuCarousel = cards?.filter(
    (x) =>
      x?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
  );
  // const itemcards=cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  //   const categories=cards?.filter((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

  // const handleClickVeg=()=>{
  //   return(
  //   setVegNonvegBtn()=!vegNonvegBtn,
  //   console.log(vegNonvegBtn));
  // }

  const toggleAccordian = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  const toggleBrowseMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleClickVeg = () => {
    const filterVeg = restaurantList?.map((x) =>
      x?.card?.card?.itemCards?.filter(
        (i) => i?.card?.info?.itemAttribute?.vegClassifier === "VEG"
      )
    );
    console.log(filterVeg);
    // setRestaurantList(filterVeg);
    // setVegNonvegBtn(!vegNonvegBtn);
  };

  return (
    <div className="relative top-20 mb-20 w-full py-5 px-[20%]">
      <div className="w-full mb-4 flex justify-between items-center">
        <div className="">
          <h2 className="text-[#282c3f] mb-2 capitalize text-xl font-bold">
            {name}
          </h2>
          <p className="text-[#7e808c] h-4 text-sm whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis">
            {cuisines.join(", ")}
          </p>
          <p className="text-[#7e808c] h-4 text-sm whitespace-nowrap mb-1 overflow-hidden overflow-ellipsis">
            {areaName}, {sla?.lastMileTravelString}
          </p>
        </div>
        <div className="border border-[#e9e9eb] rounded-md text-center p-2 max-w-[100px] shadow">
          <h4 className="text-[#3d9b6d] pb-2 border-b border-b-[#e9e9eb] mb-2 font-bold flex items-center justify-center">
            <FaStar className="mr-1" /> {avgRating}
          </h4>
          <h5 className="text-[#8b8d97] font-bold text-xs">
            {totalRatingsString}
          </h5>
        </div>
      </div>
      <div className="mb-4">
        {expectationNotifiers && (
          <div className="text-[#7e808c] flex items-center mb-4 text-sm font-medium">
            <img
              className="mr-3"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/" +
                expectationNotifiers[0]?.icon?.imageId
              }
              alt=""
            />{" "}
            {expectationNotifiers[0]?.text}
          </div>
        )}
        <hr className="border-0 border-b border-dashed border-b-[#d3d3d3] mb-4" />
        <div className="mb-4 text-[#3e4152] flex items-center text-base font-bold">
          <div className="mr-6">🕖 {sla?.deliveryTime} MINS</div>
          <div className="flex items-center">
            <HiOutlineCurrencyRupee className="mr-2 text-xl" />{" "}
            {costForTwoMessage}
          </div>
        </div>
      </div>
      <div className="flex items-center overflow-x-scroll pb-4 mb-2 no-scrollbar">
        {offers.map((x) => (
          <RestaurantCoupon key={x?.info?.offerIds[0]} data={x?.info} />
        ))}
      </div>
      <div className="">
        {vegTag[0] &&
          (!vegTag[0]?.card?.card?.isPureVeg === true ? (
            <div className="mt-6 mx-4 h-3 flex items-center translate-z">
              <div className="text-[#3d4152] font-bold text-base">Veg Only</div>
              <button
                onClick={() => handleClickVeg()}
                className="ml-3 h-4 border-0 cursor-pointer bg-[#d4d5d9] w-9 relative rounded inline-block translate-z transition-c will"
              >
                <span className="absolute top-0 left-0 w-4 bg-[#fff] border-2 border-[#d4d5d9] h-4 rounded transition-all"></span>
              </button>
            </div>
          ) : (
            <div className="mt-6 mx-4 h-3 flex items-center translate-z">
              <img
                className="mr-3"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/" +
                  vegTag[0]?.card?.card?.vegOnlyDetails?.imageId
                }
                alt=""
              />
              <span className="text-[#535665] text-xs">PURE VEG</span>
            </div>
          ))}
        <hr className="border-b-[.5px] h-[.5px] my-6 mx-auto border-[#d3d3d3]" />
      </div>
      <div className="mt-5">
        {ResMenuCarousel[0] && (
          <div>
            <h3 className="text-[#282c3f] font-bold text-xl mb-4">
              {ResMenuCarousel[0].card.card.title}
            </h3>
            <div className="flex overflow-x-scroll no-scrollbar">
              {ResMenuCarousel[0].card.card.carousel.map((x) => (
                <RestaurantMenuCarousel data={x} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="">
        {restaurantList &&
          restaurantList.map((x, index) => (
            <RestaurantMenuList
              key={x?.card?.card?.title}
              data={x?.card?.card}
              index={index}
              showIndex={showIndex === index}
              setShowIndex={() => toggleAccordian(index)}
            />
          ))}
        {/* { categories &&
            categories.map((x)=><RestaurantNestedMenuList key={x?.card?.card?.title} data={x?.card?.card}/>)
        } */}
      </div>
      <div className="fixed left-0 right-0 bottom-0 translate-3d-[0,48px,0] h-16">
        <button
          onClick={() => {
            toggleBrowseMenu();
          }}
          className="absolute left-1/2 -translate-x-1/2 w-[150px] h-10"
        >
          <div className="h-10 w-[150px] bg-[#5d8ed5] rounded-3xl text-xs text-white text-center p-3 flex items-center justify-center uppercase transition-all">
            <ImSpoonKnife className="mr-2" /> Browse Menu
          </div>
        </button>
      </div>
      {showMenu && (
        <div className="max-h-[320px] w-[500px] bg-white fixed bottom-0 right-1/2 translate-x-1/2 overflow-auto">
          <div className="py-[26px] pr-[24px] pl-[40px]">
            {restaurantList.map((x) => (
              <div
                key={x?.card?.card?.title}
                className="mb-[20px] text-[#3d4152] items-center flex justify-between cursor-pointer text-base font-medium"
              >
                <span>{x?.card?.card?.title}</span>
                <span>{x?.card?.card?.itemCards.length}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
