import { Link } from "react-router-dom";
import { SWIGGY_LOGO_CDN } from "../utils/constants";
import {
  FaMagnifyingGlass,
  FaUser,
  FaCartShopping,
  FaRegLifeRing,
} from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="px-40 py-5 fixed w-screen z-10 bg-white flex justify-between shadow-lg">
      <div className="h-12">
        <Link to="/home">
          <img className="h-12" src={SWIGGY_LOGO_CDN} />
        </Link>
      </div>
      <div className="w-6/12">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/home/search">
              <div className="flex items-center">
                <FaMagnifyingGlass className="h-6 m-2 text-[#3d4152]" />
                <h3 className="text-[#3d4152] font-semibold">Search</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/home/offers">
              <div className="flex items-center">
                <BiSolidOffer className="h-6 m-2 text-[#3d4152]" />
                <h3 className="text-[#3d4152] font-semibold">Offers</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/home/support">
              <div className="flex items-center">
                <FaRegLifeRing className="h-6 m-2 text-[#3d4152]" />
                <h3 className="text-[#3d4152] font-semibold">Help</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link>
              <div className="flex items-center">
                <FaUser className="h-6 m-2 text-[#3d4152]" />
                <h3 className="text-[#3d4152] font-semibold">Sign In</h3>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/home/cart">
              <div className="flex items-center">
                <FaCartShopping className="h-6 m-2 text-[#3d4152]" />
                <h3 className="text-[#3d4152] font-semibold">
                  Cart({cartItem.length})
                </h3>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
