import React from "react";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";

const ProductModule = () => {
  return (
    <div className="mt-20 w-full">
      <div className="flex w-full gap-8">
        <ImageSection />
        <DetailsSection />
      </div>
    </div>
  );
};

export default ProductModule;
