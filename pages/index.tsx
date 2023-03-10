import Head from "next/head";
import About from "@/components/templates/About";
import Targets from "@/components/templates/Targets";
import News from "@/components/templates/News";
import Partners from "@/components/templates/Partners";
import Faculties from "@/components/templates/Faculties";
import Maps from "@/components/templates/Maps";
import { FacultyData, NewsData } from "@/types";

import { GetServerSideProps } from "next";

export default function Home({
  news,
  faculties,
}: {
  news: NewsData[];
  faculties: FacultyData[];
}) {
  const bachelors = faculties.filter((faculty) => faculty.type === "bachelor");
  const masters = faculties.filter((faculty) => faculty.type === "master");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <About />
        <Targets />
        <News data={news} />
        <Partners />
        <Faculties faculties={bachelors} name="Bakalavr" bg="bg-white" />
        <Faculties faculties={masters} name="Magistr" bg="bg-secondary-50" />
        <Maps />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  news: NewsData[];
  faculties: FacultyData[];
}> = async (context) => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/news/public`
  );

  const news: NewsData[] = await res.json();

  res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/faculties/public`
  );

  const faculties: FacultyData[] = await res.json();

  return {
    props: {
      news,
      faculties,
    },
  };
};
