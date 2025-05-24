import Link from "next/link";

interface BreadcrumbProps {
  category: string;
}

export function Breadcrumb({ category }: BreadcrumbProps) {
  const map = {
    Luxury: "Coches de Lujo",
    Sports: "Coches Deportivos",
    "Formula-one": "Fórmula 1",
    Classic: "Colección Clásica",
    Motorcycles: "Motocicletas",
    Jets: "Aviación",
  };

  const label = map[category as keyof typeof map] || "Categoría";

  return (
    <nav className="text-sm text-gray-500 my-4">
      <Link href="/" className="hover:underline">Inicio</Link>
      {" / "}
      <span className="text-gray-400">{label}</span>
    </nav>
  );
}
