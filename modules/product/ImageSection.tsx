import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 items-end">
      <div className="w-3/5 aspect-square relative border border-gray-200">
        <Image
          src={"/assets/images/Necklace-1.jpg"}
          alt="product-image"
          fill
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ImageSection;
