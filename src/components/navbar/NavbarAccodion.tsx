import React, { useState, ReactNode } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GoSmiley } from "react-icons/go";
import { useLocation, useNavigate } from "react-router-dom";

interface AccodionProps {
  title: string;
  path?: string;
  children?: ReactNode;
}

const passiveClassName =
  "flex flex relative w-full cursor-pointer items-center justify-start gap-4 py-3 sm:font-bold transition-colors duration-300 lg:hover:bg-primaryHover";

const activeClassName =
  "flex relative w-full cursor-pointer items-center justify-start gap-4 py-3 font-bold transition-colors bg-primaryHover";

export const NavbarAccodion = ({ title, path, children }: AccodionProps) => {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        onClick={() => {
          setOpen(!open);
        }}
        className={path === pathname ? activeClassName : passiveClassName}
      >
        <div className="hidden basis-1/4 justify-end text-2xl sm:flex ">
          {path === "/humor" && <GoSmiley />}
          {path === "/sports" && <GoSmiley />}
        </div>
        <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:flex-1 sm:justify-between sm:gap-0">
          <header>{title}</header>
          <BiChevronDown
            className={`justify-self-end text-[1.5rem] transition-transform ${
              open && "rotate-180"
            }`}
          />
        </div>
      </section>
      {open && (
        <div className="flex w-full flex-col items-center text-xl sm:pl-[25%]">
          {children}
        </div>
      )}
    </>
  );
};
