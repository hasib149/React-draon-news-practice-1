import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div
      className="flex
    justify-between mx-auto w-11/12 mt-6 items-center"
    >
      <div className="right"></div>
      <div className="center flex gap-5 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="right flex gap-2.5">
        <img src="/user.png" alt="" />
        <button className="bg-primary px-7 rounded-md text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
