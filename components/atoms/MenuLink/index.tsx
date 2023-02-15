import Link from "next/link";
import React from "react";
import { INavLink } from "@/types";

export const MenuLink = ({ link, name }: INavLink) => {
  return (
    <Link href={link} className="text-base pl-12 py-2 border-b">
      {name}
    </Link>
  );
};
