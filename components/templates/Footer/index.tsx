import Logo from "@/components/atoms/Logo";
import FooterHemis from "@/components/molecules/FooterHemis";
import FooterInfo from "@/components/molecules/FooterInfo";
import React from "react";
import FooterSocials from "../FooterSocials";

const Footer = () => {
  return (
    <footer className="mt-[300px] bg-gradient-green">
      <div className="max-w-7xl mx-auto py-4 md:py-12 px-3 flex flex-col justify-center md:flex-row md:items-start gap-10 md:gap-0">
        <div className="mx-auto">
          <Logo />
        </div>
        <FooterInfo />
        <FooterHemis />
      </div>
      <FooterSocials />
    </footer>
  );
};

export default Footer;
