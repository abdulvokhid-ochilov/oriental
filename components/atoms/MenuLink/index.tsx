import Link from "next/link";
import React from "react";
import { INavLink } from "@/types";

export const MenuLink = ({ link, name }: INavLink) => {
  return (
    <Link
      href={link}
      className="text-base pl-12 py-2 border-b md:text-lg md:border-0 md:px-4 md:hover:text-white md:hover:bg-primary md:hover:rounded-3xl md:hover:shadow"
    >
      {name}
    </Link>
  );
};
