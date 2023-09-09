import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[75vh] relative bg-black flex justify-center items-center">
      <Image
        src={"/assets/images/HomeBannerImage.jpg"}
        alt="banner-image"
        fill
        className="opacity-50"
        objectFit="cover"
      />
      <div className="text-white z-10 flex gap-4 flex-col items-center">
        <div className="text-6xl font-bold">
          Explore Our Exciting Assortments of Jwellery
        </div>
        <button className="border-2 bg-black bg-opacity-60 border-white py-4 px-8 font-semibold text-2xl rounded-full hover:scale-105 transition-transform">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
