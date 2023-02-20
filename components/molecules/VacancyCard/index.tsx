import React from "react";
import { Vacancy } from "@/types";
import Link from "next/link";

const VacancyCard = ({ vacancy }: { vacancy: Vacancy }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 hover:shadow-lg px-8 py-6 rounded-2xl bg-secondary-50 md:bg-white">
      <div className="flex flex-col justify-between items-start gap-5 md:border-r-4 border-r-primary-500 rounded-l">
        <h3 className="text-2xl md:text-3xl font-bold">{vacancy.job.job}</h3>
        <p className="text-sm md:text-lg font-normal">{vacancy.description}</p>
        <Link
          href={`/vacancy/${vacancy.id}`}
          className="rounded-xl border border-secondary-300 py-2 px-5 bg-white hover:bg-secondary-50 w-full md:w-auto cursor-pointer text-xl font-semibold text-center md:text-left"
        >
          ariza qoldirish
        </Link>
      </div>
    </div>
  );
};

export default VacancyCard;
