import React from "react";
// import images
import WomanImg from "../img/woman_hero.png";
// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-cover bg-no-repeat bg-center py-24 ">
      <div className="container mx-auto flex justify-around h-full">
        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <div> New Trend </div>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold"> WOMEN </span>
          </h1>
          <Link
            to={"/"}
            className="font-semibold border-b-2 border-primary self-start uppercase"
          >
            Discover More
          </Link>
        </div>
        {/* IMAGE */}
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;