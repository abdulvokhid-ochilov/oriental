import React from "react";
import { MenuLink } from "@/components/atoms/MenuLink";
import Mail from "@/components/atoms/Mail";
import Phone from "@/components/atoms/Phone";

const MenuPanel = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const handleClickScroll = () => {
    const element = document.getElementById("faculties");
    setOpen(!open);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="flex flex-col md:hidden text-white">
        <MenuLink link="/" name="Biz haqimizda" open={open} setOpen={setOpen} />
        <a
          onClick={handleClickScroll}
          className="text-base pl-12 py-2 border-b md:text-lg md:border-0 md:px-4 md:hover:text-white md:hover:bg-primary md:hover:rounded-3xl md:hover:shadow"
        >
          Fakultetlar
        </a>
        <MenuLink
          link="/university"
          name="Universitet hayoti"
          open={open}
          setOpen={setOpen}
        />
        <MenuLink
          link="/"
          name="Kontrakt narxlari"
          open={open}
          setOpen={setOpen}
        />
        <MenuLink link="/" name="Ish joylari" open={open} setOpen={setOpen} />
        <MenuLink
          link="/"
          name="Murojaat uchun"
          open={open}
          setOpen={setOpen}
        />
      </div>
      <div className="pl-12 py-8 flex flex-col gap-4">
        <Mail />
        <Phone />
      </div>
    </>
  );
};

export default MenuPanel;
