"use client";
import React from "react";
import LinkItem from "./LinkItem";
import { useActiveState } from "../../hooks/useActiveState";
import { navItems } from "../../routes/routes";
import { NavigationItem } from "../../utils/utils.types";

type NavProps = React.HTMLAttributes<HTMLDivElement>;
const NavBar = (props: NavProps) => {
  const isActive = useActiveState();
  return (
    <div className="border-2  min-w-36" {...props}>
      <div className="sticky top-0 flex md:h-[100vh] w-64 md:flex-col p-5">
        <nav className="mt-3 w-fit flex md:block">
          {navItems.map((item: NavigationItem, index) => (
            <LinkItem
              key={index}
              href={item.href}
              label={item.label}
              isActive={isActive(item.href)}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
