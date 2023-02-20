import { FacultyData } from "@/types";
import React from "react";

const TuitionCard = ({ faculty }: { faculty: FacultyData }) => {
  return (
    <div className="py-5 md:p-7">
      <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-b-primary pb-7 md:py-7">
        <h2 className="font-bold text-xl md:text-3xl">{faculty.title}</h2>
        <div className="w-full md:w-auto flex flex-row md:flex-col justify-between md:gap-2 items-center ">
          <h5 className="font-medium md:font-bold text-base md:text-lg">
            Yo’nalish Shifri
          </h5>
          <span className="font-extrabold text-lg md:text-xl bg-gradient-green text-white px-5 py-0.5 md:py-2 rounded-3xl">
            {faculty.code}
          </span>
        </div>
      </div>
      <div className="pt-7 max-w-sm">
        <div className="flex flex-row justify-between font-bold md:text-lg text-base">
          <h5>Ta’lim shakli</h5>
          <h5>Kontrakt to’lovi</h5>
        </div>
        {faculty.contract.map((contract) => (
          <div
            key={contract.id}
            className="flex flex-row md:text-lg text-base items-center gap-2"
          >
            <p className="w-1/4">
              {contract.type === "daytime" && "Kunduzgi"}
              {contract.type === "evening" && "Kechgi"}
              {contract.type === "external" && "Sirtqi"}
            </p>
            <span className=" h-0.5 flex-grow bg-secondary-50"></span>
            <p className="text-primary md:text-xl text-lg font-semibold">
              {contract.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionCard;
