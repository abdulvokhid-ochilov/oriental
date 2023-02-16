import React from "react";
import univer from "../../../assets/univer.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="mt-28 md:mt-48 max-w-7xl mx-auto flex flex-col gap-14 pb-24 px-3">
      <div>
        <Image
          src={univer}
          alt="university"
          className="lg:hidden block w-full"
        />
      </div>
      <div>
        <h1 className="text-primary text-5xl font-black">ORIENTAL</h1>
        <h3 className="text-black text-2xl font-black text-right inline-block ml-24">
          UNIVERSITY
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-24">
        <div className="w-full lg:w-1/2 px-5 border-l-4 border-l-primary-500 rounded-l h-fit">
          <p className="text-sm lg:text-lg leading-8 font-normal">
            O‘zbekiston Respublikasi Prezidentining Vazirlar Mahkamasi
            huzuridagi ta’lim sifatini nazorat qilish davlat inspeksiyasi
            tomonidan Nodavlat ta’lim xizmatlarini ko‘rsatish sohasidagi
            faoliyatni amalga oshirish uchun 2021-05-25 sanadagi № 0022
            Litsenziya asosdida “ORIENTAL UNIVERSITETI” tashkil etilgan.
          </p>
          <p className="text-sm lg:text-lg leading-8 font-normal indent-10">
            Universitet Kengashi oliy kollegial organ bo‘lib, barcha
            yo‘nalishdagi faoliyatini muvofiqlashtirib boradi. Dolzarb
            vazifalarni tezkor va sifatli hal qilish bo‘yicha qarorlar qabul
            qiladi.
          </p>
        </div>
        <Image
          src={univer}
          alt="university"
          className="hidden lg:block w-1/2"
        />
      </div>
      <div>
        <div className="w-full lg:w-1/2 px-5 border-r-4 border-r-primary-500 rounded-l h-fit ml-auto lg:pl-12">
          <p className="text-sm lg:text-lg leading-8 font-normal">
            Universitet ochilishidan oliy maqsad yurtimiz va jahon uchun yetuk
            kadrlarni tayyorlash va ularning kelajaklarini qurishda katta yordam
            berishdan iborat.
          </p>
          <p className="text-sm lg:text-lg leading-8 font-normal indent-10">
            Buning uchun oriental university da barcha qulayliklar yaratiladi va
            talabalar o’zlarini erkin his qilishlari uchun har tomonlama
            qulayliklar yaratib beriladi.
          </p>
        </div>
      </div>
      <div>
        <div className="w-full lg:w-1/2 px-5 border-l-4 border-l-primary-500 rounded-l h-fit mr-auto">
          <p className="text-sm lg:text-lg leading-8 font-normal">
            Universitet jamoasining zamonaviy pedagogik texnologiya va
            axborot-kommunikatsiya texnologiyalarini keng joriy qilish asosida
            yuqori malakali, raqobatbardosh kadrlar tayyorlashni ta’minlash,
            ilmiy tadqiqotlarni yanada rivojlantirish, yoshlarda vatanparvarlik,
            fuqarolik, o‘z Vatani bilan faxrlanish kabi ma’naviy-ma’rifiy va
            madaniy fazilatlarni shakllantirish kabi vazifalarni hal qilishga
            qaratilgan sa’y-harakatlarini muvofiqlashtirish universitet
            Kengashining asosiy vazifasi hisoblanadi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
