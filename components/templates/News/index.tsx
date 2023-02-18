import NewsCard from "@/components/molecules/NewsCard";
import React from "react";
import { NewsData } from "@/types";

const News = ({ data }: { data: NewsData[] }) => {
  return (
    <div className="px-3 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-2xl md:text-4xl text-center font-bold">
          YANGILIKLAR
        </h2>
        <div className="flex flex-row flex-wrap gap-5 justify-center">
          {data
            .slice(-6)
            .reverse()
            .map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                image={`${process.env.NEXT_PUBLIC_BASE_URL}${news.thumbnail}`}
                text={news.short_description}
                date={news.created_at}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default News;
