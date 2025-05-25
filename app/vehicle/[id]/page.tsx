import { notFound } from "next/navigation";
import { VehicleContent } from "./vehicle-content";
import connectToDatabase from "@/lib/mongodb";
import Vehicle from "@/models/Vehicle";

type Params = { params: { id: string } };

async function getVehicle(id: string) {
  await connectToDatabase();
  const vehicle = await Vehicle.findOne({ id }).lean();
  return vehicle;
}

export async function generateStaticParams() {
  try {
    await connectToDatabase();
    const vehicles = await Vehicle.find({}, "id").lean();

    return vehicles.map((v: any) => ({
      id: v.id,
    }));
  } catch (err) {
    console.error("Error generando static params:", err);
    return [];
  }
}

export default async function VehiclePage({ params }: Params) {
  const vehicle = await getVehicle(params.id);

  if (!vehicle) notFound();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black-800">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-4">
        <VehicleContent vehicle={vehicle} />
      </div>
    </div>
  );
}
