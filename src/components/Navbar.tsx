import React from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export const Navbar = () => {
  return (
    <>
      <header className="hidden h-screen justify-between bg-secondaryBg p-10 text-white sm:flex">
        <h1 className="font-sans text-4xl">What's Trends?</h1>
      </header>
      <header className="flex w-screen items-center py-5 px-4 text-2xl sm:hidden">
        <button className="rounded-full p-1">
          <HiOutlineMenuAlt1 />
        </button>
        <div className="flex flex-1 justify-center gap-2">
          <img src="/logo.png" alt="logo" className="aspect-square w-7" />
        </div>
      </header>
    </>
  );
};
