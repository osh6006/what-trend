import React from "react";
import { NavbarAccodion } from "./NavbarAccodion";
import { NavbarLink } from "./NavbarLink";

export const NavbarDeskTopMenu = () => {
  return (
    <ul className="mt-10 flex w-full flex-col items-center gap-5 text-xl">
      <NavbarLink title="Home" path="/" />
      <NavbarLink title="Weather" path="/weather" />
      <NavbarAccodion title="Sports" path="/sports">
        <div className="">test~</div>
      </NavbarAccodion>
      <NavbarAccodion title="Community" path="/humor">
        <div className="">test~</div>
      </NavbarAccodion>
      <NavbarLink title="OTT" path="/ott" />
      <NavbarLink title="SNS" path="/sns" />
      <NavbarLink title="Shopping" path="/shopping" />
      <NavbarLink title="Music" path="/music" />
    </ul>
  );
};
