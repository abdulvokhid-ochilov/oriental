import { Vacancy } from "@/types";
import React from "react";
import Error from "next/error";
import Custom404 from "../../404";
import Image from "next/image";
import customer from "../../../assets/customer.svg";

const VacancyApply = ({
  vacancy,
  errorCode,
}: {
  vacancy: Vacancy;
  errorCode: number;
}) => {
  if (errorCode) {
    return errorCode === 404 ? <Custom404 /> : <Error statusCode={errorCode} />;
  }

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    alert("In development mode");
  };

  return (
    <div className="mt-14 md:mt-48 px-3 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:shadow-xl rounded-lg overflow-hidden">
        <div className="md:w-1/2 md:bg-gradient-green flex justify-center items-center">
          <Image src={customer} alt="customer service" />
        </div>
        <div className="md:w-1/2 flex justify-center items-center pt-5 md:px-14 md:py-28">
          <form onSubmit={submitHandler} className="flex flex-col w-full gap-5">
            <input
              className="bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              type="text"
              name="name"
              placeholder="Имя"
              required
            />
            <input
              className="bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              type="text"
              name="surname"
              placeholder="Фамилия"
              required
            />
            <input
              className="bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              type="number"
              name="phone"
              placeholder="Телефон"
              required
            />
            <input
              className="bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <button
              className="md:self-end py-5 px-12 lg:px-24 rounded-lg text-xl font-semibold w-full md:w-fit text-white hover:text-primary bg-gradient-green hover:bg-none outline hover:outline-2 hover:outline-gradient-green"
              type="submit"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/vacancies/vacancies-public/${id}`
  );
  const errorCode = res.ok ? false : res.status;

  const vacancy: Vacancy = await res.json();

  return {
    props: { errorCode, vacancy },
  };
};

export default VacancyApply;
