import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavbarDeskTopMenu } from "./NavbarDeskTopMenu";
import { NavMobileMenu } from "./NavMobileMenu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* desktop & tablet */}
      <header className="fixed hidden h-full w-72 select-none justify-center p-10 font-normal sm:flex lg:w-96">
        <div className="flex w-full flex-col items-center gap-3">
          <img src="/logo.png" alt="logo" className="aspect-square w-7" />
          <h1 className="whitespace-nowrap font-mono text-3xl font-semibold">
            What's Trends?
          </h1>
          <NavbarDeskTopMenu />
        </div>
      </header>

      {/* mobile */}
      <header className="flex w-screen items-center py-4 px-3 text-2xl sm:hidden">
        <button
          onClick={handleClick}
          className="rounded-full p-2 hover:bg-primaryHover"
        >
          <HiOutlineMenuAlt1 />
        </button>
        <Link to={"/"} className="mx-auto">
          <img src="/logo.png" alt="logo" className="aspect-square w-6" />
        </Link>
      </header>
      <NavMobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};
