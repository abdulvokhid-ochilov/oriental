import { Vacancy } from "@/types";
import React, { MutableRefObject, useRef } from "react";
import Image from "next/image";
import customer from "../../assets/customer.svg";

const Feedback = () => {
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;
  const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
  const textRef = useRef() as MutableRefObject<HTMLTextAreaElement>;

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    alert("Successfully submitted!");

    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    textRef.current.value = "";
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
              ref={nameRef}
              className="bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              type="text"
              name="name"
              placeholder="Имя"
              required
            />
            <input
              ref={phoneRef}
              className="bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              type="number"
              name="phone"
              placeholder="Телефон"
              required
            />
            <input
              ref={emailRef}
              className="bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            />
            <textarea
              ref={textRef}
              className="resize-none bg-secondary-50 px-5 py-3 rounded-lg placeholder:text-sm md:placeholder:text-base md:placeholder:font-medium placeholder:font-normal border border-secondary-200 focus:bg-white focus:outline-primary hover:bg-secondary-100"
              name="text"
              rows={4}
              placeholder="Text"
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

export default Feedback;
