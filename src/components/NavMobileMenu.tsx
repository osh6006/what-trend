import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface NavMobileType {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const commonPathClass = `flex w-full basis-full items-center gap-10 text-red-500 
            before:h-1 before:flex-1 before:bg-red-500 before:content-[''] before:transition-colors
            after:h-1 after:flex-1 after:bg-red-500 after:content-['']
            `;

export const NavMobileMenu = ({ setIsOpen, isOpen }: NavMobileType) => {
  const location = useLocation();
  const navigation = useNavigate();

  const handleNav = (url: string): void => {
    setIsOpen(!isOpen);
    navigation(url);
  };

  return (
    <ul
      className={
        isOpen
          ? "group fixed top-0 z-10 flex w-screen flex-col items-center justify-end gap-5 bg-primaryBg py-20 text-2xl duration-300"
          : "fixed top-[-800px] z-10 flex w-screen flex-col items-center justify-end gap-5 bg-primaryBg py-20 text-2xl duration-300"
      }
    >
      <li className="bg-"></li>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="absolute right-8 top-8 rounded-full p-2 text-3xl hover:bg-primaryHover "
      >
        <IoMdClose />
      </button>
      <img src="/logo.png" alt="logo" className="aspect-square w-7" />
      <h1 className="">What's Trends?</h1>
      <li
        className={location.pathname === "/" ? commonPathClass : ""}
        onClick={() => handleNav("/")}
      >
        홈
      </li>
      <li
        className={
          location.pathname === "/weather"
            ? commonPathClass
            : "commontNoPathClass"
        }
        onClick={() => handleNav("/weather")}
      >
        날짜
      </li>
      <li className={location.pathname === "/humor" ? commonPathClass : ""}>
        유머
      </li>
      <li className={location.pathname === "/ott" ? commonPathClass : ""}>
        OTT
      </li>
      <li className={location.pathname === "/sns" ? commonPathClass : ""}>
        SNS
      </li>
      <li className={location.pathname === "/shopping" ? commonPathClass : ""}>
        쇼핑
      </li>
      <li className={location.pathname === "/sports" ? commonPathClass : ""}>
        스포츠
      </li>
      <li className={location.pathname === "/music" ? commonPathClass : ""}>
        음악
      </li>
    </ul>
  );
};
