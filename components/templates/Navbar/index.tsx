import React, { useState } from "react";
import Logo from "@/components/atoms/Logo";
import Mail from "@/components/atoms/Mail";
import Phone from "@/components/atoms/Phone";
import Qabul from "@/components/atoms/Qabul";
import Menu from "@/components/atoms/Menu";
import MenuPanel from "@/components/molecules/MenuPanel";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    <nav className="absolute w-full">
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

      <div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
