import React from "react";
import NavItems from "./NavItems";
import Image from "next/image";

export default function NavItemsTrigger({ onClick, onBlur }) {
  return (
    <li onBlur={() => onBlur()} className="relative group">
      <a onClick={() => onClick()} href="#" className="flex items-center">
        <span className="text-dark">موضوعات</span>
        <Image
          id="show-more-items-icon"
          src="/online-education/assets/expand_more_24px.svg"
          alt="expand more"
          width={20}
          height={20}
        />
      </a>
      <div
        id="nav-items-list"
        className="absolute right-0 pt-[1rem] opacity-0 invisible w-[80vw] z-20"
      >
        <NavItems />
      </div>
    </li>
  );
}
