import React from "react";
import Image from "next/image";

const FacultyCard = ({ image, name }: { image: any; name: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 hover:shadow-2xl px-8 py-6 rounded-2xl bg-white">
      <Image
        src={image}
        alt="faculty image"
        className="md:w-2/5 object-cover rounded-lg"
      />
      <div className="md:w-3/5 flex flex-col justify-between items-start gap-5 md:border-r-4 border-r-primary-500 rounded-l">
        <h3 className="text-2xl md:text-4xl font-bold">{name}</h3>
        <p className="text-sm md:text-lg font-medium">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam
        </p>
        <button className="rounded-xl border py-2 px-4 hover:bg-secondary-50 w-full md:w-auto">
          Batafsil
        </button>
      </div>
    </div>
  );
};

export default FacultyCard;
