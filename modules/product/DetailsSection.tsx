import React from "react";

const DetailsSection = () => {
  return (
    <div className="flex-1 flex flex-col gap-8">
      <div>
        <p>ThatGirlInTown</p>
        <h1 className="mt-1 text-4xl font-semibold">Gold Necklace</h1>
      </div>
      <div>
        <p className="text-4xl font-light">Rs. 1200/-</p>
        <p className="text-gray-500 font-thin">Tax Included</p>
      </div>
      <div>
        <p className="pl-1">Color</p>
        <div className="flex gap-2 mt-2">
          <button className="py-2 px-8 font-semibold border border-gray-400 rounded-full">
            Gold
          </button>
          <button className="py-2 px-8 font-semibold border border-gray-400 rounded-full">
            Silver
          </button>
        </div>
      </div>
      <div>
        <p>Quantity</p>
        <input
          type="number"
          min={1}
          className="w-[100px] text-center border mt-2 border-gray-400 rounded-full py-2 px-4"
        />
      </div>
      <div className="flex flex-col gap-2 w-[300px]">
        <button className="py-2 px-8 font-semibold border border-gray-400 rounded-full hover:scale-105 transition-transform">
          Add To Cart
        </button>
        <button className="py-2 px-8 font-semibold border border-gray-400 rounded-full bg-black text-white hover:scale-105 transition-transform">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default DetailsSection;
