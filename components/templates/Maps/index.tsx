import MapCard from "@/components/molecules/MapCard";
import React from "react";

const Maps = () => {
  return (
    <div className="px-3 py-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-5">
        <MapCard
          lat={41.3054036113698}
          lng={69.28164619474138}
          name="Toshkent shahar yakkasaroy tumani shota rustavelli 154-uy"
        />
        <MapCard
          lat={41.30188573147211}
          lng={69.27912698866297}
          name="Toshkent shahar olmazor tumani noraztepa 52A-uy"
        />
      </div>
    </div>
  );
};

export default Maps;
