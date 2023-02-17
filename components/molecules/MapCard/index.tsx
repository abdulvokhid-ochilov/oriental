import React from "react";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import { useMemo } from "react";

const MapCard = ({
  lat,
  lng,
  name,
}: {
  lat: number;
  lng: number;
  name: string;
}) => {
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full lg:w-1/2 lg:h-72 h-48">
      <GoogleMap
        options={mapOptions}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{
          width: "full",
          height: "100%",
          borderRadius: "15px",
        }}
        onLoad={() => console.log("Map Component Loaded...")}
      />
      <p className="mt-2 text-xl font-semibold">{name}</p>
    </div>
  );
};

export default MapCard;
