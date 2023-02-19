import React from "react";
import { IoMdClose } from "react-icons/io";

interface NavMobileType {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
}

export const NavMobileMenu = ({ handleClick, isOpen }: NavMobileType) => {
  return (
    <ul
      className={
        isOpen
          ? "fixed top-0 z-10 flex w-screen flex-col items-center justify-end gap-5 bg-primaryBg py-20 text-2xl duration-300"
          : "fixed top-[-500px] z-10 flex w-screen flex-col items-center justify-end gap-5 bg-primaryBg py-20 text-2xl duration-300"
      }
    >
      <button
        onClick={handleClick}
        className="absolute right-8 top-8 rounded-full  p-2 text-3xl hover:bg-primaryHover"
      >
        <IoMdClose />
      </button>
      <li>날씨</li>
      <li>유머</li>
      <li>OTT</li>
      <li>SNS</li>
      <li>쇼핑</li>
      <li>스포츠</li>
      <li>음악</li>
    </ul>
  );
};
