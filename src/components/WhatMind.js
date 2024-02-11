import { SWIGGY_CUISIENS_IMG_CDN } from "../utils/constants";

const WhatMind = ({ data }) => {
  const { imageId } = data;

  return (
    <div className="w-36 mr-4">
      <div className="w-36">
        <img
          className="w-full"
          src={SWIGGY_CUISIENS_IMG_CDN + imageId}
          alt=""
        />
      </div>
    </div>
  );
};

export default WhatMind;
