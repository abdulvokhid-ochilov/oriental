import React from "react";
import target from "../../../assets/target.svg";
import announce from "../../../assets/announce.svg";
import paper from "../../../assets/paper.svg";
import TargetCard from "@/components/molecules/TargetCard";

const Targets = () => {
  return (
    <div className="px-3 py-10 bg-secondary-50">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-center font-bold text-2xl md:text-4xl">
          Maqsad, Vazifa va Shiorimiz
        </h2>
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between">
          <TargetCard
            image={target}
            name="MAQSAD"
            text="Buyuk allomalarimizga munosib avlodni tarbiyalash, yetuk sinxron tarjimon mutaxassislari, sharq tillariga ega pedagoglar yetishtirib chiqarish."
          />
          <TargetCard
            image={paper}
            name="VAZIFA"
            text="Buyuk allomalarimizga munosib avlodni tarbiyalash, yetuk sinxron tarjimon mutaxassislari, sharq tillariga ega pedagoglar yetishtirib chiqarish."
          />
          <TargetCard
            image={announce}
            name="SHIORIMIZ"
            text="Buyuk allomalarimizga munosib avlodni tarbiyalash, yetuk sinxron tarjimon mutaxassislari, sharq tillariga ega pedagoglar yetishtirib chiqarish."
          />
        </div>
      </div>
    </div>
  );
};

export default Targets;
