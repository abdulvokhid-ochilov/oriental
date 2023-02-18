import React from "react";
import { GetServerSideProps } from "next";
import { Media } from "@/types";
import MediaGroup from "@/components/molecules/MediaGroup";

const University = ({ media }: { media: Media[] }) => {
  return (
    <div className="mt-28 md:mt-48 px-3 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <MediaGroup media={media[1]} />
        <MediaGroup media={media[1]} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  media: Media[];
}> = async (context) => {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/media/public`
  );

  const media: Media[] = await res.json();

  return {
    props: {
      media,
    },
  };
};

export default University;
