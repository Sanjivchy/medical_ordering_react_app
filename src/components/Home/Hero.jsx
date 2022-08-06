import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#00df9a] font-bold-p-2"> We Heal You.</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"> You Are Protected.</h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-2 ">
            Fast, Flexible Financing for Your{" "}
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold "
            strings={["Health"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl font-bold text-gray-500 pl-2">We care we help we pray for your health. So Dont be cheap buy medicine from our online shop.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Explore</button>
      </div>
    </div>
  );
};

export default Hero;
