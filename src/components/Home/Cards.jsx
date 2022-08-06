import React from "react";
import graphs from "../Home/Images/graphs.svg";
import about from "../Home/Images/about.png";
import { AiFillFacebook } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1230]px mx-auto grid md:grid-cols-3 gap-3">
        <div className="w-full flex flex-col p-4 my-4  ">
          <img className="w-20 mx-auto mt-[-3rem] rounded-full " src={about} alt="/" />
          <h1 className="text-2xl font-bold text-center py-8">Biprash Gautam</h1>
          <p className="text-center">Full Stack Developer</p>
          <div className=" content-end">
            <AiFillFacebook className="  my-6 rounded-full" size={40} />

          </div>
        </div>
        <div className="w-full flex flex-col p-4 my-4  ">
          <img className="w-20 mx-auto mt-[-3rem] rounded-full " src={about} alt="/" />
          <h1 className="text-2xl font-bold text-center py-8">Biprash Gautam</h1>
          <p className="text-center ">Full Stack Developer</p>
          <AiFillFacebook className="justify-center my-6 rounded-full" size={40} />
        </div>
        <div className="w-full flex flex-col p-4 my-4  ">
          <img className="w-20 mx-auto mt-[-3rem] rounded-full " src={about} alt="/" />
          <h1 className="text-2xl font-bold text-center py-8">Biprash Gautam</h1>
          <p className="text-center">Full Stack Developer</p>
          <AiFillFacebook className="justify-center my-6 rounded-full" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
