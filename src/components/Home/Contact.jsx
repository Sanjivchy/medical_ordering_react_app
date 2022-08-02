import React from "react";
import graphs from "../Home/Images/graphs.svg";
import analysis from "../Home/Images/analysis.jpg";

const Contact = () => {
  return (
    <div className="w-full bg-white py-16 px-14">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <h1 className="md:text-7xl sm:text-3xl text-2xl py-2 mx-10 my-16 p-10"> Contact Form</h1>

          <p className="md:text-1xl sm:text-2xl text-1xl py-2 mx-12 my-16 p-10">
            We plan and support a health-related project that helps in uplifting the lives of
            underprivileged groups. We also find and fund amazing projects that help change the
            lives of disadvantaged children and women from across different regions of the nation.
          </p>
        </div>

        <div className="flex flex-col justify-center mx-16 my-16">
          {/* <p className=" font-bold">Name</p> */}
          <form action="" className="px-4">
            <div className="my-4">
              <div>
                <label htmlFor="">Name</label>
              </div>
              <div>
                <input
                  className="p-3 flex w-full rounded-md"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className="my-4">
              <div>
                <label htmlFor="">Your Email</label>
              </div>
              <div>
                <input
                  className="p-3 flex w-full rounded-md"
                  type="text"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
