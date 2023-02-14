import React from "react";
import Image from "next/image";
import Logo from "@/components/atoms/Logo";
import Mail from "@/components/atoms/Mail";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-gradient-green">
        <div className="max-w-7xl mx-auto">
          <Logo />
          <Mail />
          <div>
            <div>
              <span>Murojaat uchun / Call center</span>
              <span>+998951932442 / +998955012442</span>
            </div>
          </div>
          <div>
            <button>QABUL 2023</button>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
