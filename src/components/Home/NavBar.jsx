import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
  const { token } = useSelector((state) => state.auth);
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        Ashwini Foundation
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        {token ? (
          <li className="p-4">
            <Link to="/members">Members</Link>
          </li>
        ) : (
          <>
            <li className="p-4">
              <Link to="/login">Login</Link>
            </li>
            <li className="p-4">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {/* responsive? */}
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-600 bg-[#000400] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        <ul className="uppercase p-4">
          <li className="p-4 boder-b border-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 boder-b border-gray-600">About</li>
          <li className="p-4 boder-b border-gray-600">Contact</li>
          <li className="p-4 boder-b border-gray-600">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-4 boder-b border-gray-600">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
