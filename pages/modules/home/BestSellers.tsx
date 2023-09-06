import ProductCard from "@/pages/components/ProductCard";
import React from "react";

const BestSellers = () => {
  return (
    <div className="w-full px-10 py-5">
      <h2 className="my-4 text-3xl font-light text-center">Best Sellers</h2>
      <div className="w-full grid grid-cols-5 gap-4">
        <ProductCard
          title="Necklace 1"
          price="500"
          image="/assets/images/Necklace-1.jpg"
        />
        <ProductCard
          title="Necklace 2"
          price="500"
          image="/assets/images/Necklace-2.jpg"
        />
        <ProductCard
          title="Necklace 3"
          price="500"
          image="/assets/images/Necklace-3.jpg"
        />
        <ProductCard
          title="Necklace 4"
          price="500"
          image="/assets/images/Necklace-4.jpg"
        />
        <ProductCard
          title="Necklace 5"
          price="500"
          image="/assets/images/Necklace-5.jpg"
        />
      </div>
    </div>
  );
};

export default BestSellers;
