import { TiWeatherPartlySunny } from "react-icons/ti";
import { GoSmiley } from "react-icons/go";
import {
  MdVideoLibrary,
  MdOutlineTextsms,
  MdOutlineSportsBasketball,
} from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { IoMdMusicalNote } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface NavberLinkProps {
  title: string;
  path: string;
}

const passiveClassName =
  "flex w-full cursor-pointer items-center justify-start gap-4 py-3 font-bold transition-colors duration-300 hover:bg-primaryHover";

const activeClassName =
  "flex w-full cursor-pointer items-center justify-start gap-4 py-3 font-bold transition-colors bg-primaryHover";

export const NavbarLink = ({ title, path }: NavberLinkProps) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? activeClassName : passiveClassName
      }
    >
      <div className="flex basis-1/4 justify-end text-2xl">
        {path === "/" && <AiOutlineHome />}
        {path === "/weather" && <TiWeatherPartlySunny />}
        {path === "/humor" && <GoSmiley />}
        {path === "/ott" && <MdVideoLibrary />}
        {path === "/sns" && <MdOutlineTextsms />}
        {path === "/shopping" && <AiOutlineShoppingCart />}
        {path === "/sports" && <MdOutlineSportsBasketball />}
        {path === "/music" && <IoMdMusicalNote />}
      </div>
      <p className="">{title}</p>
    </NavLink>
  );
};
