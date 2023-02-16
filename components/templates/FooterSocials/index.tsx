import React from "react";
import Image from "next/image";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import youtube from "../../../assets/youtube.svg";
import telegram from "../../../assets/telegram.svg";

const FooterSocials = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 md:pb-12 md:px-48 flex flex-row gap-4 justify-center md:justify-start">
      <Image
        src={instagram}
        alt="social media icons"
        className="rounded-full"
      />
      <Image src={telegram} alt="social media icons" className="rounded-full" />
      <Image src={facebook} alt="social media icons" className="rounded-full" />
      <Image src={youtube} alt="social media icons" className="rounded-full" />
    </div>
  );
};

export default FooterSocials;
