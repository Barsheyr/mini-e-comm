import React, { useContext, useEffect, useState } from "react";
// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// cart context
import { CartContext } from "../contexts/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
// import logo
import Logo from "../img/logo.svg";
// import link
import { Link } from "react-router-dom";

const Header = () => {
  // header start
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  // event listeners
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <div>
      <div
        className={`${
          isActive ? "bg-white py-4 shadow-md " : "bg-none py-6"
        } fixed w-full z-10 transition-all`}
      >
        <div className="container mx-auto  flex item-center justify-between h-full">
          <Link to={"/"}>
            <div>
              <img className="w-[40px]" src={Logo} alt="" />
            </div>
          </Link>
          {/* cart */}
          <div
            className="cursor-pointer flex relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsBag className="text-2xl" />
            <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full text-white flex justify-center items-center">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
