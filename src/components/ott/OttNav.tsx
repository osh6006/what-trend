import React from "react";
import { NavLink } from "react-router-dom";
import { RiNetflixFill } from "react-icons/ri";
import { AiFillAmazonCircle } from "react-icons/ai";
import { TbBrandDisney } from "react-icons/tb";

const common =
  "flex items-center gap-2 rounded-md bg-black w-40 justify-center py-2 px-2 text-lg";
const active = `${common} bg-black text-white border-none`;
const passive = `${common} bg-transparent text-black border-2 hover:bg-black hover:text-white transition-colors`;

export const OttNav = () => {
  return (
    <nav className="mt-3 flex gap-2">
      <NavLink
        to="/ott/netflix"
        className={({ isActive }) => (isActive ? active : passive)}
      >
        <RiNetflixFill className="text-red-500" /> Netflix
      </NavLink>
      <NavLink
        to="/ott/disney"
        className={({ isActive }) => (isActive ? active : passive)}
      >
        <TbBrandDisney className="text-blue-500" /> Disney +
      </NavLink>
      <NavLink
        to="/ott/amazon-prime"
        className={({ isActive }) => (isActive ? active : passive)}
      >
        <AiFillAmazonCircle /> Amazon
      </NavLink>
    </nav>
  );
};
