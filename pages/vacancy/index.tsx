import { Vacancy } from "@/types";
import React from "react";
import { GetServerSideProps } from "next";
import VacancyCard from "@/components/molecules/VacancyCard";

const Vacancies = ({ vacancies }: { vacancies: Vacancy[] }) => {
  return (
    <div className="mt-14 md:mt-48 px-3 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        <h1 className="text-2xl md:text-4xl font-bold">Ish joylari</h1>
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  vacancies: Vacancy[];
}> = async (context) => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/vacancies/vacancies-public`
  );

  const vacancies: Vacancy[] = await res.json();

  return {
    props: {
      vacancies,
    },
  };
};

export default Vacancies;
