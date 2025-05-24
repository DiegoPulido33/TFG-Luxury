import { notFound } from "next/navigation";
import { VehicleContent } from "./vehicle-content";

import { vehicleData } from "@/data/vehicleData"; 

export function generateStaticParams() {
  return Object.keys(vehicleData).map((id) => ({
    id,
  }));
}

export default function VehiclePage({ params }: { params: { id: string } }) {
  const vehicle = vehicleData[params.id as keyof typeof vehicleData];

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black-800">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-4">
        <VehicleContent vehicle={vehicle} />
      </div>
    </div>
  );
}
