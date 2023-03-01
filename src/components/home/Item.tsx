import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GoSmiley } from "react-icons/go";
import {
  MdVideoLibrary,
  MdOutlineTextsms,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdMusicalNote } from "react-icons/io";
import { Link } from "react-router-dom";

interface ItemProps {
  text: string;
  icon: string;
  color?: string;
}

export const Item = ({ text, icon, color = "text-brand" }: ItemProps) => {
  return (
    <div
      className={`flex cursor-pointer flex-col items-center justify-center py-2 px-5
    transition-all hover:scale-110 ${color} rounded-md font-bold shadow-md`}
    >
      <Link className={`text-5xl `} to={`/${text}`}>
        {icon === "weather" && <TiWeatherPartlySunny />}
        {icon === "humor" && <GoSmiley />}
        {icon === "OTT" && <MdVideoLibrary />}
        {icon === "SNS" && <MdOutlineTextsms />}
        {icon === "shopping" && <AiOutlineShoppingCart />}
        {icon === "sports" && <MdOutlineSportsBasketball />}
        {icon === "music" && <IoMdMusicalNote />}
      </Link>
      <p className="select-none">{text}</p>
    </div>
  );
};
