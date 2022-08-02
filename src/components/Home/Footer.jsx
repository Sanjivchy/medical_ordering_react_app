// import React from "react";
// import graphs from "../Home/Images/graphs.svg";
// import analysis from "../Home/Images/analysis.jpg";

// const Footer = () => {
//   return (
//     <div className="w-full bg-grey py-16 px-14">
//       <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">

//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import graphs from "../Home/Images/graphs.svg";
import analysis from "../Home/Images/analysis.jpg";

const Footer = () => {
  return (
    <div className="w-full bg-[#f1f2f3] py-16 px-14 ">
      <div className="max-w-[1240px] grid md:grid-cols-3 py-2 mx-12 p-10 ">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold "> Contact</h1>
          <p className="">Tell Us Everything?</p>
          <p className="w-[200px] sm:text-1xl text-sm py-2">
            Do you have any question? Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col justify-center ">
          {/* <p className=" font-bold">Name</p> */}
          <div>
            <h1 className="font-bold ">Policy</h1>
            <p className="">Application Security</p>
            <p className="">Software Principles</p>
          </div>
        </div>
        <div className="flex flex-col justify-center py-2">
          {/* <p className=" font-bold">Name</p> */}
          <div>
            <p className=" ">Support Center</p>
            <p className=" ">Customer Support</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] grid md:grid-cols-3 py-2 mx-12 my-14 p-10 ">
        <div className="flex flex-col justify-center  ">
          <h1 className="font-bold "> Address</h1>
          {/* <p className="">Tell Us Everything?</p> */}
          <p className="w-[200px] sm:text-1xl text-1xl py-2">
            Kalopul, Kathmandu 
          </p>
          <p> Nepal</p>
        </div>

        <div className="flex flex-col justify-center ">
          <div>
            <h1 className="font-bold ">Company</h1>
            <p className="my-2">About</p>
            <p className="my-2">Blog</p>
            <p className="my-2">Press</p>
            <p className="">Carrres & Culture</p>
          </div>
        </div>
        <div className="flex flex-col justify-center py-2">
          <div>
            <h1 className="font-bold">Languages</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
