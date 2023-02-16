import React, { useState } from "react";
import Logo from "@/components/atoms/Logo";
import Mail from "@/components/atoms/Mail";
import Phone from "@/components/atoms/Phone";
import Qabul from "@/components/atoms/Qabul";
import Menu from "@/components/atoms/Menu";
import MenuPanel from "@/components/molecules/MenuPanel";
import { MenuLink } from "@/components/atoms/MenuLink";
import { INavLink } from "@/types";

const links = [
  { link: "/", name: "Biz haqimizda" },
  { link: "/", name: "Fakultetlar" },
  { link: "/", name: "Universitet hayoti" },
  { link: "/", name: "Kontrakt narxlari" },
  { link: "/", name: "Talabalarga" },
  { link: "/", name: "Ish joylari" },
  { link: "/", name: "Murojaat uchun" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    <nav className="absolute w-full shadow-md">
      <div className="bg-gradient-green">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
          <Logo />
          <div className="hidden flex-grow md:flex gap-6 ml-4 lg:ml-10">
            <Mail />
            <Phone />
          </div>
          <Qabul />
          <Menu open={menu} setOpen={setMenu} />
        </div>

        {!menu && <MenuPanel />}
      </div>

      <div className="hidden md:flex flex-wrap justify-center max-w-7xl mx-auto py-3 gap-3">
        {links.map(({ link, name }: INavLink) => (
          <MenuLink key={name} link={link} name={name} />
        ))}
      </div>

    </nav>
  );
};

export default Navbar;
