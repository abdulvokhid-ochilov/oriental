import Link from "next/link";
import React from "react";
import { MenuLink } from "@/components/atoms/MenuLink";
import { INavLink } from "@/types";
import Mail from "@/components/atoms/Mail";
import Phone from "@/components/atoms/Phone";

const links = [
  { link: "/", name: "Biz haqimizda" },
  { link: "/", name: "Fakultetlar" },
  { link: "/", name: "Universitet hayoti" },
  { link: "/", name: "Kontrakt narxlari" },
  { link: "/", name: "Talabalarga" },
  { link: "/", name: "Ish joylari" },
  { link: "/", name: "Murojaat uchun" },
];

const MenuPanel = () => {
  return (
    <>
      <div className="flex flex-col md:hidden text-white">
        {links.map(({ link, name }: INavLink) => (
          <MenuLink key={name} link={link} name={name} />
        ))}
      </div>
      <div className="pl-12 py-8 flex flex-col gap-4">
        <Mail />
        <Phone />
      </div>
    </>
  );
};

export default MenuPanel;
