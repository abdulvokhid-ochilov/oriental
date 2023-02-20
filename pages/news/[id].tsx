import { NewsData } from "@/types";
import React from "react";
import Error from "next/error";
import Custom404 from "../404";
import Image from "next/image";

const News = ({ news, errorCode }: { news: NewsData; errorCode: number }) => {
  if (errorCode) {
    return errorCode === 404 ? <Custom404 /> : <Error statusCode={errorCode} />;
  }

  const formattedDate =
    new Date(news.created_at).getDate() +
    "." +
    (new Date(news.created_at).getMonth() + 1) +
    "." +
    new Date(news.created_at).getFullYear();

  return (
    <div className="mt-28 md:mt-48 px-3 py-16 bg-white">
      <div className="max-w-[806px] mx-auto flex flex-col gap-5">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}${news.picture}`}
          alt="news image"
          width="0"
          height="0"
          sizes="100vw"
          className="object-cover w-full h-52 md:h-[463px] rounded-lg"
        />
        <h2 className="text-2xl md:text-4xl font-bold">{news.title}</h2>

        <span className="text-lg font-medium text-primary">
          {formattedDate}
        </span>
        <p
          className="text-sm md:text-lg font-normal"
          dangerouslySetInnerHTML={{ __html: news.description }}
        ></p>
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/news/public/${id}`
  );
  const errorCode = res.ok ? false : res.status;

  const news: NewsData = await res.json();

  return {
    props: { errorCode, news },
  };
};

export default News;
