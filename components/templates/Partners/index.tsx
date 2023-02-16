import NewsCard from "@/components/molecules/NewsCard";
import React from "react";
import ellipse from "../../../assets/Ellipse 1.svg";
import ellipse3 from "../../../assets/Ellipse 3.svg";
import ellipse5 from "../../../assets/Ellipse 5.svg";
import ellipse2 from "../../../assets/image 1.svg";
import ellipse4 from "../../../assets/image 2.svg";
import Partner from "@/components/atoms/Partner";

const Partners = () => {
  return (
    <div className="px-3 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          Hamkorlarimiz
        </h2>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          <Partner
            image={ellipse}
            title="Toshkent davlat jahon tillari universiteti"
          />
          <Partner image={ellipse3} title="Xalq ta’limi vazirligi" />
          <Partner
            image={ellipse5}
            title="Toshkent davlat sharqshunoslik universiteti"
          />
          <Partner image={ellipse2} title="Xalqaro islom akademiyasi" />
          <Partner
            image={ellipse4}
            title="O’zbekiston islom sivilizatsiya markazi"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
