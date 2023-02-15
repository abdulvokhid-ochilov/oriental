import React from "react";
import menu from "../../../assets/burgers.svg";
import close from "../../../assets/vuesax.svg";
import Image from "next/image";

const Menu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <div
      className="block md:hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <Image src={open ? menu : close} alt="menu" className="w-6" />
    </div>
  );
};

export default Menu;
