import NewsCard from "@/components/molecules/NewsCard";
import React from "react";
import news from "../../../assets/news.png";

const News = () => {
  return (
    <div className="px-3 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          YANGILIKLAR
        </h2>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          <NewsCard
            image={news}
            text="Bugun Oriental universiteti Jismoniy madaniyat fakulteti talabalari – universal jang sport turi bo‘yicha o‘tkaziladigan navbatdagi jahon chempionatida ishtirok etish uchun Rossiyaning Volgagrad shahriga jo‘nab ketdi."
            date="03.11.2022"
          />
          <NewsCard
            image={news}
            text="Bugun Oriental universiteti Jismoniy madaniyat fakulteti talabalari – universal jang sport turi bo‘yicha o‘tkaziladigan navbatdagi jahon chempionatida ishtirok etish uchun Rossiyaning Volgagrad shahriga jo‘nab ketdi."
            date="03.11.2022"
          />
          <NewsCard
            image={news}
            text="Bugun Oriental universiteti Jismoniy madaniyat fakulteti talabalari – universal jang sport turi bo‘yicha o‘tkaziladigan navbatdagi jahon chempionatida ishtirok etish uchun Rossiyaning Volgagrad shahriga jo‘nab ketdi."
            date="03.11.2022"
          />
          <NewsCard
            image={news}
            text="Bugun Oriental universiteti Jismoniy madaniyat fakulteti talabalari – universal jang sport turi bo‘yicha o‘tkaziladigan navbatdagi jahon chempionatida ishtirok etish uchun Rossiyaning Volgagrad shahriga jo‘nab ketdi."
            date="03.11.2022"
          />
          <NewsCard
            image={news}
            text="Bugun Oriental universiteti Jismoniy madaniyat fakulteti talabalari – universal jang sport turi bo‘yicha o‘tkaziladigan navbatdagi jahon chempionatida ishtirok etish uchun Rossiyaning Volgagrad shahriga jo‘nab ketdi."
            date="03.11.2022"
          />
          <NewsCard
            image={news}
            text="Bugun Oriental universiteti Jismoniy madaniyat fakulteti talabalari – universal jang sport turi bo‘yicha o‘tkaziladigan navbatdagi jahon chempionatida ishtirok etish uchun Rossiyaning Volgagrad shahriga jo‘nab ketdi."
            date="03.11.2022"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
