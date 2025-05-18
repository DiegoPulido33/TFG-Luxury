import { notFound } from "next/navigation";
import { VehicleContent } from "./vehicle-content";

export const vehicleData = {
  "101": {
    id: "101",
    name: "Rolls-Royce Phantom",
    price: "€450,000",
    rentPrice: "€2,500/día",
    description:
      "El Rolls-Royce Phantom es la cúspide del lujo automotriz. Este extraordinario automóvil combina elegancia atemporal con tecnología de punta para ofrecer una experiencia de conducción inigualable.",
    specs: {
      engine: "V12 Twin-Turbo de 6.75L",
      power: "563 hp",
      acceleration: "0-100 km/h en 5.1 segundos",
      transmission: "Automática de 8 velocidades",
      drivetrain: "Tracción trasera",
      interior: "Acabados artesanales en cuero, madera y metal",
    },
    images: [
      "/images/RR.webp",
    
      
    ],
  },
  "102": {
    id: "102",
    name: "Bentley Flying Spur",
    price: "€320,000",
    rentPrice: "€1,800/día",
    description:
      "El Bentley Flying Spur es una berlina de lujo que combina elegancia y potencia, con un diseño sofisticado y un interior artesanal.",
    specs: {
      engine: "W12 de 6.0L",
      power: "626 hp",
      acceleration: "0-100 km/h en 3.7 segundos",
      transmission: "Automática de 8 velocidades",
      drivetrain: "AWD",
      interior: "Cuero fino, madera artesanal, sistema de sonido Naim",
    },
    images: ["https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb"],
  },
  "103": {
    id: "103",
    name: "Maybach S-Class",
    price: "€380,000",
    rentPrice: "€2,200/día",
    description:
      "Lujo extremo, tecnología de punta y comodidad inigualable en una berlina diseñada para ser conducida... o conducirte.",
    specs: {
      engine: "V12 Biturbo de 6.0L",
      power: "621 hp",
      acceleration: "0-100 km/h en 4.6 segundos",
      transmission: "Automática de 9 velocidades",
      drivetrain: "AWD",
      interior: "Masaje, pantallas traseras, iluminación ambiental",
    },
    images: ["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8"],
  },
  "201": {
    id: "201",
    name: "Ferrari SF90 Stradale",
    price: "€500,000",
    rentPrice: "€3,000/día",
    description:
      "El Ferrari SF90 Stradale es un superdeportivo híbrido enchufable que representa lo último en innovación y rendimiento de la marca italiana.",
    specs: {
      engine: "V8 Twin-Turbo + 3 motores eléctricos",
      power: "986 hp",
      acceleration: "0-100 km/h en 2.5 segundos",
      transmission: "Automática de 8 velocidades",
      drivetrain: "AWD",
      interior: "Diseño minimalista enfocado en el conductor",
    },
    images: ["https://images.unsplash.com/photo-1592198084033-aade902d1aae"],
  },
  "202": {
    id: "202",
    name: "Lamborghini Huracán",
    price: "€280,000",
    rentPrice: "€2,400/día",
    description:
      "El Lamborghini Huracán es un superdeportivo italiano conocido por su diseño agresivo y su rugido característico.",
    specs: {
      engine: "V10 de 5.2L",
      power: "640 hp",
      acceleration: "0-100 km/h en 2.9 segundos",
      transmission: "Automática de doble embrague",
      drivetrain: "AWD",
      interior: "Futurista y deportivo con acabados de carbono",
    },
    images: ["https://images.unsplash.com/photo-1566473965997-3de9c817e938"],
  },
  "203": {
    id: "203",
    name: "McLaren 720S",
    price: "€315,000",
    rentPrice: "€2,800/día",
    description:
      "Un superdeportivo británico con tecnología de carreras, aerodinámica activa y una experiencia de conducción visceral.",
    specs: {
      engine: "V8 Twin-Turbo de 4.0L",
      power: "710 hp",
      acceleration: "0-100 km/h en 2.9 segundos",
      transmission: "Automática de doble embrague",
      drivetrain: "RWD",
      interior: "Minimalismo orientado al piloto",
    },
    images: ["/images/mc-720S.webp",""],
  },
  "301": {
    id: "301",
    name: "Mercedes-AMG F1 W12",
    price: "A consultar",
    rentPrice: "No disponible para alquiler",
    description:
      "El monoplaza que dominó la Fórmula 1 en 2021, pilotado por Lewis Hamilton y Valtteri Bottas. Máximo rendimiento en pista.",
    specs: {
      engine: "1.6L V6 Turbo Híbrido",
      power: "1000+ hp",
      acceleration: "< 2.0 segundos",
      transmission: "Secuencial de 8 velocidades",
      drivetrain: "Tracción trasera",
      interior: "Cabina de competición monocasco de carbono",
    },
    images: ["/images/f1_mercedes.webp"],
  },
  "302": {
    id: "302",
    name: "Red Bull RB16B",
    price: "A consultar",
    rentPrice: "No disponible para alquiler",
    description:
      "El monoplaza de Red Bull Racing que compitió ferozmente por el campeonato mundial de F1. Ingeniería de élite.",
    specs: {
      engine: "1.6L V6 Turbo híbrido",
      power: "1000+ hp",
      acceleration: "< 2.0 segundos",
      transmission: "Secuencial de 8 velocidades",
      drivetrain: "Tracción trasera",
      interior: "Cockpit de fibra de carbono personalizado",
    },
    images: ["/images/f1_rb.webp"],
  },
  "401": {
    id: "401",
    name: "Mercedes-Benz 300SL Gullwing",
    price: "€1,800,000",
    rentPrice: "€6,000/día",
    description:
      "Un ícono del automovilismo clásico con puertas de ala de gaviota y diseño atemporal. Una joya de colección.",
    specs: {
      engine: "3.0L I6",
      power: "215 hp",
      acceleration: "0-100 km/h en 8.8 segundos",
      transmission: "Manual de 4 velocidades",
      drivetrain: "Tracción trasera",
      interior: "Estilo vintage con acabados de lujo",
    },
    images: ["https://images.unsplash.com/photo-1566024287286-457247b70310"],
  },
  "402": {
    id: "402",
    name: "Ferrari 250 GTO",
    price: "€45,000,000",
    rentPrice: "Solo subasta",
    description:
      "Considerado el coche más caro del mundo, este Ferrari clásico es el Santo Grial del coleccionismo automotriz.",
    specs: {
      engine: "V12 de 3.0L",
      power: "300 hp",
      acceleration: "0-100 km/h en 6.1 segundos",
      transmission: "Manual de 5 velocidades",
      drivetrain: "RWD",
      interior: "Estilo clásico de competición",
    },
    images: ["https://images.unsplash.com/photo-1612911912304-5c585d289294"],
  },
  "501": {
    id: "501",
    name: "Ducati Panigale V4",
    price: "€28,000",
    rentPrice: "€400/día",
    description:
      "Una superbike de alto rendimiento inspirada en la competición MotoGP, perfecta para los amantes de la velocidad.",
    specs: {
      engine: "V4 de 1,103 cc",
      power: "214 hp",
      acceleration: "0-100 km/h en 3.0 segundos",
      transmission: "6 velocidades",
      drivetrain: "Cadena",
      interior: "Pantalla TFT, modo de conducción",
    },
    images: ["https://images.unsplash.com/photo-1558981806-ec527fa84c39"],
  },
  "502": {
    id: "502",
    name: "BMW M 1000 RR",
    price: "€32,000",
    rentPrice: "€450/día",
    description:
      "La M 1000 RR combina ingeniería de alto nivel y tecnología de competición para una moto extremadamente rápida y precisa.",
    specs: {
      engine: "999 cc en línea",
      power: "212 hp",
      acceleration: "0-100 km/h en 3.1 segundos",
      transmission: "6 velocidades",
      drivetrain: "Cadena",
      interior: "Electrónica avanzada, modos de conducción",
    },
    images: ["https://images.unsplash.com/photo-1568772585407-9361f9bf3a87"],
  },
  "503": {
    id: "503",
    name: "MV Agusta F4",
    price: "€25,000",
    rentPrice: "€380/día",
    description:
      "La MV Agusta F4 es una superbike italiana que destaca por su diseño agresivo y su carácter deportivo.",
    specs: {
      engine: "998 cc en línea",
      power: "195 hp",
      acceleration: "0-100 km/h en 3.2 segundos",
      transmission: "6 velocidades",
      drivetrain: "Cadena",
      interior: "Diseño italiano de alto rendimiento",
    },
    images: ["https://images.unsplash.com/photo-1609630875289-22852fa678ce"],
  },
  "601": {
    id: "601",
    name: "Gulfstream G650",
    price: "€54,500,000",
    rentPrice: "€45,000/hora",
    description:
      "Uno de los jets privados más lujosos y rápidos del mundo, con alcance intercontinental y confort total.",
    specs: {
      engine: "2x Rolls-Royce BR725",
      power: "16,900 lbf c/u",
      acceleration: "Mach 0.925",
      transmission: "Jet",
      drivetrain: "Turbofan",
      interior: "Hasta 18 pasajeros con suites, Wi-Fi y cocina",
    },
    images: ["https://images.unsplash.com/photo-1540962351504-03099e0a754b"],
  },
  "602": {
    id: "602",
    name: "Bombardier Global 7500",
    price: "€72,000,000",
    rentPrice: "€55,000/hora",
    description:
      "Jet de ultra largo alcance con comodidades de lujo que redefine el vuelo privado.",
    specs: {
      engine: "2x GE Passport",
      power: "18,920 lbf c/u",
      acceleration: "Mach 0.925",
      transmission: "Jet",
      drivetrain: "Turbofan",
      interior: "Sala de conferencias, cama, ducha y más",
    },
    images: ["https://images.unsplash.com/photo-1474302770737-173ee21bab63"],
  },
  "603": {
    id: "603",
    name: "Embraer Praetor 600",
    price: "€21,000,000",
    rentPrice: "€35,000/hora",
    description:
      "Jet de negocios que ofrece una combinación ideal de alcance, velocidad y confort.",
    specs: {
      engine: "2x Honeywell HTF7500E",
      power: "7,528 lbf c/u",
      acceleration: "Mach 0.83",
      transmission: "Jet",
      drivetrain: "Turbofan",
      interior: "Cabina silenciosa con asientos cama y conectividad total",
    },
    images: ["https://images.unsplash.com/photo-1559686043-e65d6d6c0e3b"],
  },
};

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
      {/* Contenedor principal para centrar el contenido */}
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-4">
        {/* Aquí se renderiza el contenido del vehículo */}

        <VehicleContent vehicle={vehicle} />
      </div>
    </div>
  );
}
