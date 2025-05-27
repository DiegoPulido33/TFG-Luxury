import { CategoryContent } from "./category-content";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const categoryData = {
  Luxury: {
    title: "Coches de Lujo",
    description:
      "Experimenta un confort y sofisticación incomparables con nuestros vehículos de lujo premium.",
    vehicles: [
      {
        id: 101,
        name: "Rolls-Royce Phantom",
        price: "€450,000",
        image: "/images/RR.webp",
      },
      {
        id: 102,
        name: "Bentley Flying Spur",
        price: "€320,000",
        image:
          "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 103,
        name: "Maybach S-Class",
        price: "€380,000",
        image:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  Sports: {
    title: "Coches Deportivos",
    description:
      "Descubre nuestra colección de coches deportivos de alto rendimiento creados para la máxima experiencia de conducción.",
    vehicles: [
      {
        id: 201,
        name: "Ferrari SF90 Stradale",
        price: "€500,000",
        image:
          "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 202,
        name: "Lamborghini Huracán",
        price: "€280,000",
        image:
          "https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 203,
        name: "McLaren 720S",
        price: "€315,000",
        image: "/images/mc-720S.webp",
      },
    ],
  },
  "Formula-one": {
    title: "Fórmula 1",
    description:
      "Experimenta la cúspide de la ingeniería automotriz con nuestra exclusiva colección de Fórmula 1.",
    vehicles: [
      {
        id: 301,
        name: "Mercedes-AMG F1 W12",
        price: "€13,000,000",
        image: "/images/f1_mercedes.webp",
      },
      {
        id: 302,
        name: "Red Bull RB16B",
        price: "€14,000,000",
        image: "/images/f1_rb.webp",
      },
    ],
  },
  Classic: {
    title: "Colección Clásica",
    description:
      "Obras maestras atemporales que representan la época dorada del automovilismo.",
    vehicles: [
      {
        id: 401,
        name: "Mercedes-Benz 300SL Gullwing",
        price: "€1,800,000",
        image: "/images/Mercedes-Benz-300SL-Gullwing.webp",
      },
      {
        id: 402,
        name: "Ferrari 250 GTO",
        price: "€45,000,000",
        image: "/images/Ferrari-250-GTO.webp",
      },
    ],
  },
  Motorcycles: {
    title: "Motocicletas",
    description:
      "Excelencia sobre dos ruedas para el motociclista distinguido.",
    vehicles: [
      {
        id: 501,
        name: "Ducati Panigale V4",
        price: "€28,000",
        image:
          "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 502,
        name: "BMW M 1000 RR",
        price: "€32,000",
        image:
          "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 503,
        name: "MV Agusta F4",
        price: "€25,000",
        image:
          "https://images.unsplash.com/photo-1609630875289-22852fa678ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  Jets: {
    title: "Aviación",
    description:
      "El lujo toma vuelo con nuestra exclusiva colección de aeronaves privadas.",
    vehicles: [
      {
        id: 601,
        name: "Gulfstream G650",
        price: "€54,500,000",
        image:
          "https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 602,
        name: "Bombardier Global 7500",
        price: "€72,000,000",
        image:
          "https://images.unsplash.com/photo-1474302770737-173ee21bab63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 603,
        name: "Embraer Praetor 600",
        price: "€21,000,000",
        image: "/images/Embraer.webp",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data = categoryData[params.category as keyof typeof categoryData] || {
    title: "Categoría No Encontrada",
    description: "Esta categoría no existe.",
    vehicles: [],
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-6xl">
        <CategoryContent data={data} category={params.category} />
      </div>
    </div>
  );
}
