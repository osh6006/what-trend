import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavMobileMenu } from "./NavMobileMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="hidden h-screen justify-between p-10 text-white sm:flex">
        <h1 className="font-sans text-4xl">What's Trends?</h1>
      </header>
      <header className="flex w-screen items-center py-4 px-3 text-2xl sm:hidden">
        <button
          onClick={handleClick}
          className="rounded-full p-2 hover:bg-primaryHover"
        >
          <HiOutlineMenuAlt1 />
        </button>
        <Link to={"/"} className="mx-auto">
          <img src="/logo.png" alt="logo" className="aspect-square w-7" />
        </Link>
      </header>
      <NavMobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};
