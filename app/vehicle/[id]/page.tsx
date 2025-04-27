import { notFound } from 'next/navigation'
import { VehicleContent } from "./vehicle-content"

export const vehicleData = {
  "1": {
    id: "1",
    name: "Rolls-Royce Phantom",
    price: "€450,000",
    rentPrice: "€2,500/día",
    description: "El Rolls-Royce Phantom es la cúspide del lujo automotriz. Este extraordinario automóvil combina elegancia atemporal con tecnología de punta para ofrecer una experiencia de conducción inigualable.",
    specs: {
      engine: "V12 Twin-Turbo de 6.75L",
      power: "563 hp",
      acceleration: "0-100 km/h en 5.1 segundos",
      transmission: "Automática de 8 velocidades",
      drivetrain: "Tracción trasera",
      interior: "Acabados artesanales en cuero, madera y metal"
    },
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1635770310392-f1ae37e0a5b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  //... other vehicle data
}

export function generateStaticParams() {
  return Object.keys(vehicleData).map((id) => ({
    id,
  }))
}

export default function VehiclePage({ params }: { params: { id: string } }) {
  const vehicle = vehicleData[params.id as keyof typeof vehicleData]
  
  if (!vehicle) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {/* Contenedor principal para centrar el contenido */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-4">
        {/* Aquí se renderiza el contenido del vehículo */}
        <VehicleContent vehicle={vehicle} />
      </div>
    </div>
  )
}
