import { notFound } from "next/navigation";
import { VehicleContent } from "./vehicle-content";

type Params = { params: { id: string } };

async function getVehicle(id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;
  const res = await fetch(`${baseUrl}/api/vehicles/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export async function generateStaticParams() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/vehicles`);
  const vehicles = await res.json();

  return vehicles.map((v: { id: string }) => ({
    id: v.id,
  }));
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
