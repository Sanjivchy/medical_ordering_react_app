import React from "react";
import graphs from "../Home/Images/graphs.svg";
import analysis from "../Home/Images/analysis.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-14">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={analysis} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">SALSES ANALYSIS GRAPHS</p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Management of Analysis
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quae nulla eum
            aliquam corrupti nesciunt repellendus illum, similique quisquam laudantium ullam ut
            exercitationem quidem deleniti autem nihil. Nihil, illum molestiae.
          </p>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx py-3 text-black'
  ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
