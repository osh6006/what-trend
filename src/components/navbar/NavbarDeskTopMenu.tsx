import { NavLink } from "react-router-dom";
import { NavbarAccodion } from "./NavbarAccodion";
import { NavbarLink } from "./NavbarLink";

const activeClassName =
  "w-full text-center cursor-pointer gap-4 py-3 font-bold transition-colors bg-primaryHover";

const passiveClassName =
  "w-full text-center cursor-pointer gap-4 py-3 font-bold sm:font-bold transition-colors duration-300 lg:hover:bg-primaryHover";

export const NavbarDeskTopMenu = () => {
  return (
    <ul className="mt-10 flex w-full flex-col items-center gap-5 text-xl">
      <NavbarLink title="Home" path="/" />
      <NavbarLink title="Weather" path="/weather" />
      <NavbarAccodion title="Sports" path="/sports">
        <NavLink
          className={({ isActive }) =>
            isActive ? activeClassName : passiveClassName
          }
          to="/sports/soccer"
        >
          Football
        </NavLink>
      </NavbarAccodion>
      <NavbarLink title="OTT" path="/ott" />
      <NavbarAccodion title="Community" path="/humor">
        <div className="">test~</div>
      </NavbarAccodion>
      <NavbarLink title="SNS" path="/sns" />
      <NavbarLink title="Shopping" path="/shopping" />
      <NavbarLink title="Music" path="/music" />
    </ul>
  );
};
