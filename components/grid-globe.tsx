"use client";

import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

const DOHA = { lat: 25.2854, lng: 51.531 };

const colors = ["#06b6d4", "#3b82f6", "#6366f1"];

// Doha is the hub; arcs fan out to places that matter for the story
// (Mangalore for education and work, plus a few global tech hubs).
const destinations = [
  { lat: 12.9141, lng: 74.856, alt: 0.2 }, // Mangalore, India
  { lat: 51.5072, lng: -0.1276, alt: 0.3 }, // London
  { lat: 1.3521, lng: 103.8198, alt: 0.3 }, // Singapore
  { lat: 37.7749, lng: -122.4194, alt: 0.6 }, // San Francisco
  { lat: 52.52, lng: 13.405, alt: 0.2 }, // Berlin
  { lat: 25.2048, lng: 55.2708, alt: 0.1 }, // Dubai
  { lat: 35.6762, lng: 139.6503, alt: 0.4 }, // Tokyo
  { lat: -33.8688, lng: 151.2093, alt: 0.5 }, // Sydney
];

const sampleArcs = destinations.flatMap((dest, i) => [
  {
    order: i + 1,
    startLat: DOHA.lat,
    startLng: DOHA.lng,
    endLat: dest.lat,
    endLng: dest.lng,
    arcAlt: dest.alt,
    color: colors[i % colors.length],
  },
  {
    order: i + 1,
    startLat: dest.lat,
    startLng: dest.lng,
    endLat: DOHA.lat,
    endLng: DOHA.lng,
    arcAlt: dest.alt,
    color: colors[(i + 1) % colors.length],
  },
]);

export const GridGlobe = () => {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: DOHA,
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className="absolute -left-5 top-36 flex h-full w-full items-center justify-center md:top-40">
      <div className="relative mx-auto h-96 w-full max-w-7xl overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-40 w-full select-none bg-gradient-to-b from-transparent to-white dark:to-black" />
        <div className="absolute z-10 h-72 w-full md:h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};
