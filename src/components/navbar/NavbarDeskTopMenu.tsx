import React from "react";
import { NavbarAccodion } from "./NavbarAccodion";
import { NavbarLink } from "./NavbarLink";

export const NavbarDeskTopMenu = () => {
  return (
    <ul className="mt-10 flex w-full flex-col items-center gap-5 text-xl">
      <NavbarLink title="홈" path="/" />
      <NavbarLink title="날씨" path="/weather" />
      <NavbarAccodion title="유머" path="/humor">
        <div className="">test~</div>
      </NavbarAccodion>
      <NavbarLink title="OTT" path="/ott" />
      <NavbarLink title="SNS" path="/sns" />
      <NavbarLink title="쇼핑" path="/shopping" />
      <NavbarLink title="스포츠" path="/sports" />
      <NavbarLink title="음악" path="/music" />
    </ul>
  );
};
