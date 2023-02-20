import React, { useState } from "react";
import Logo from "@/components/atoms/Logo";
import Mail from "@/components/atoms/Mail";
import Phone from "@/components/atoms/Phone";
import Qabul from "@/components/atoms/Qabul";
import Menu from "@/components/atoms/Menu";
import MenuPanel from "@/components/molecules/MenuPanel";
import { MenuLink } from "@/components/atoms/MenuLink";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const handleClickScroll = () => {
    const element = document.getElementById("faculties");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full shadow-md top-0 z-50 bg-white">
      <div className="bg-gradient-green">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-3">
          <Link href="/">
            <Logo />
          </Link>
          <div className="hidden flex-grow md:flex gap-6 ml-4 lg:ml-10">
            <Mail />
            <Phone />
          </div>
          <Qabul />
          <Menu open={menu} setOpen={setMenu} />
        </div>

        {!menu && <MenuPanel open={menu} setOpen={setMenu} />}
      </div>

      <div className="hidden md:flex flex-wrap justify-center max-w-7xl mx-auto py-3 gap-3">
        <MenuLink link="/" name="Biz haqimizda" />
        <a
          onClick={handleClickScroll}
          className="text-base pl-12 py-2 border-b md:text-lg md:border-0 md:px-4 md:hover:text-white md:hover:bg-primary md:hover:rounded-3xl md:hover:shadow"
        >
          Fakultetlar
        </a>
        <MenuLink link="/university" name="Universitet hayoti" />
        <MenuLink link="/tuition" name="Kontrakt narxlari" />
        <MenuLink link="/vacancy" name="Ish joylari" />
        <MenuLink link="/feedback" name="Murojaat uchun" />
      </div>
    </nav>
  );
};

export default Navbar;
