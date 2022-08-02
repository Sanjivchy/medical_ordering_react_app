import React from "react";
import graphs from "../Home/Images/graphs.svg";
import analysis from "../Home/Images/analysis.jpg";
import about from "../Home/Images/about.png";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-14">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={about} alt="/" />

        <div className="flex flex-col justify-center">
          <p className="md:text-6xl sm:text-3xl text-2xl text-[#00df9a] font-bold">Our Impact</p>

          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">You make us great.</h1>
          <p>
            We are working for improving the lives of about 30-33% of the total population living in
            rural areas through direct and indirect practice. Young people (men and women) and
            children from different backgrounds have a huge impact on us and our activities. They
            highlight these parts of the society that are broken so we can help them in the possible
            ways to regain hope and flourish in life.
          </p>
          <button
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'
  ">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
