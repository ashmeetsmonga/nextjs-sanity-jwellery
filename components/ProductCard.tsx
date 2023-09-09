import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
}

const ProductCard: FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <Link href={"/product/123"}>
      <div className="w-full aspect-square cursor-pointer hover:scale-105 transition-transform">
        <div className="w-full h-full relative rounded">
          <Image
            src={image}
            alt="title"
            className="rounded"
            fill
            objectFit="cover"
          />
        </div>
        <div className="w-full text-center mt-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <h4 className="text-lg">Rs. {price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
