import React, {useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import useLocation from "../hooks/useLocation";

const LandingPage = () => {

const [locations, setLocations] = useState("");
const suges = useLocation(locations);

const navigate=useNavigate();
const toHome=(id)=>{
  navigate('/home',{state:{place_id:id}});
}

console.log(suges);

  return (
    <div>
      <div className="w-screen h-[540px] flex">
        <div className="w-[55%] h-full py-16 pl-40 pr-8">
          <div className="flex justify-between mb-16">
            <img
              className="w-40"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
              alt=""
            />
            <div className="flex">
              <button className="py-1 px-4 font-bold hover:text-orange-600">
                Login
              </button>
              <button className="bg-black font-bold text-white py-1 px-8">
                Sign up
              </button>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold text-[#282c3F] text-[40px] mb-2">
              Cooking gone wrong?
            </h3>
            <h5 className="text-[#686b78] text-2xl font-normal">
              Order food from favourite restaurants near you.
            </h5>
          </div>
          <div className="w-full mb-6">
              <input
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
                type="text"
                placeholder="Enter your delivery location"
                className=" w-[78%] border p-5 font-semibold text-lg border-[#686b78]"
              />
              <button className="bg-[#fc8019] text-white font-bold py-[23px] px-6">FIND FOOD</button>
            {suges ? (
              <div className="py-2 px-5 w-full shadow-lg z-10 relative text-[#535665] border border-[#686b78] bg-white">
                {suges.map((s) => (
                  <div key={s.place_id} onClick={()=>{toHome({id:s.place_id})}}>
                    <li className="py-4 border-dotted flex items-center border-b border-b-gray-400 list-none hover:text-orange-600">
                      <img className="h-6 mr-5" src="https://www.iconpacks.net/icons/1/free-location-icon-983-thumb.png" alt="" /> {s.description}
                    </li>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <h5 className="text-[#a9abb2] font-medium mb-2">POPULAR CITIES IN INDIA</h5>
            <p className="text-[#686b78] font-semibold">Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai Pune& more.</p>
          </div>
        </div>
        <div className="w-[45%] h-[540px]">
          <img
            className="w-full h-full"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
            alt=""
          />
        </div>
      </div>
      <div className="px-40 pb-20 bg-[#2b1e16] text-white flex justify-between">
        <div className="w-3/12 text-center">
          <img className="mb-8 h-64 mx-auto" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="" />
          <h4 className="mb-2 font-semibold text-xl">No Minimum Order</h4>
          <p className="text-[#e0cbc1]">Order in for yourself or for the group, with no restrictions on order value</p>
        </div>
        <div className="w-3/12 text-center">
          <img className="mb-8 h-64 mx-auto" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="" />
          <h4 className="mb-2 font-semibold text-xl">Live Order Tracking</h4>
          <p className="text-[#e0cbc1]">Know where your order is at all times, from the restaurant to your doorstep</p>
        </div>
        <div className="w-3/12 text-center">
          <img className="mb-8 h-64 mx-auto" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="" />
          <h4 className="mb-2 font-semibold text-xl">Lightning-Fast Delivery</h4>
          <p className="text-[#e0cbc1]">Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
        </div>
      </div>
      <div className="px-40 flex items-center justify-between">
          <div className="w-4/12">
              <h3 className="w-72 font-bold text-[#282c3F] text-[35px] leading-10 mb-6">Restaurants in your pocket</h3>
              <h5 className="text-[#686b78] text-xl font-normal mb-6">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</h5>
              <div className="flex justify-between mt-16">
                <img className="w-[12rem]" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="" />
                <img  className="w-[12rem]" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="" />
              </div>
          </div>
          <div className="w-7/12 flex">
            <img className="h-[32rem]" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="" />
            <img  className="mt-12 h-[32rem]" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="" />
          </div>
      </div>
    </div>
  );
};

export default LandingPage;