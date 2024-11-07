import { NavigationItem } from "@/src/utils/utils.types";
import Link from "next/link";
import React from "react";

interface LinkItemProps extends NavigationItem {
  isActive: boolean;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, label, isActive }) => {
  return (
    <Link
      href={href}
      className={`mb-1 flex items-center rounded-lg p-2 w-fit ${
        isActive
          ? "text-[#2D3748] font-bold"
          : "text-[#494949] hover:bg-appLightBlue"
      }`}
    >
      <span className="ml-2 text-lg">{label}</span>
    </Link>
  );
};

export default LinkItem;
