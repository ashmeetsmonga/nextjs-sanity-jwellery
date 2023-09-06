import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10">
      <div>
        <AiOutlineMenu className="text-primary" size={25} />
      </div>
      <div className="font-extrabold text-primary text-3xl">
        That Girl In Town
      </div>
      <div>
        <BsFillBagFill className="text-primary" size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
