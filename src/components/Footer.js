import { APP_STORE_IMG_CDN, PLAY_STORE_IMG_CDN } from "../utils/constants";

const Footer = () => {
    return (
      <>
          <div className="px-40 py-10 flex justify-between bg-[#000] text-white">
              <div className="w-3/12">
                  <h3 className="text-[#808080] mb-8 text-lg font-semiBold">Company</h3>
                  <ul>
                      <li className="my-3">About us</li>
                      <li className="my-3">Team</li>
                      <li className="my-3">Careers</li>
                      <li className="my-3">Swiggy Blog</li>
                      <li className="my-3">Bug Bounty</li>
                      <li className="my-3">Swiggy One</li>
                      <li className="my-3">Swiggy Corporate</li>
                      <li className="my-3">Swiggy Instamart</li>
                      <li className="my-3">Swiggy Genie</li>
                  </ul>
              </div>
              <div className="w-3/12">
                  <h3 className="text-[#808080] mb-8 text-lg font-semiBold">Contact</h3>
                  <ul>
                      <li className="my-3">Help & Support</li>
                      <li className="my-3">Partner with us</li>
                      <li className="my-3">Ride with us</li>
                  </ul>
              </div>
              <div className="w-3/12">
                  <h3 className="text-[#808080] mb-8 text-lg font-semiBold">Legal</h3>
                  <ul>
                      <li className="my-3">Terms & Conditions</li>
                      <li className="my-3">Refund & Cancellation</li>
                      <li className="my-3">Privacy Policy</li>
                      <li className="my-3">Cookie Policy</li>
                      <li className="my-3">Offer Terms</li>
                      <li className="my-3">Phishing & Fraud</li>
                      <li className="my-3">Corporate — Swiggy Money Codes Terms and Conditions</li>
                      <li className="my-3">Corporate - Swiggy Discount Voucher Terms and Conditions</li>
                  </ul>
              </div>
              <div className="w-3/12">
                  <div className="mb-8">
                      <img alt="app store logo" src={APP_STORE_IMG_CDN} />
                  </div>
                  <div>
                      <img alt=" play store logo" src={PLAY_STORE_IMG_CDN}/>
                  </div>
              </div>
          </div>
      </>
    )
  }
  
  export default Footer