"use client";

import { useSearchParams } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RentSuccessPage() {
  const searchParams = useSearchParams();

  // Convertir params a números o dar valores por defecto
  const days = Number(searchParams?.get("days")) || 0;
  const totalPrice = Number(searchParams?.get("totalPrice")) || 0;
  const vehicleName = searchParams?.get("vehicleName") || "Vehículo desconocido";

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center">
        <div className="container py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-4">
              ¡Solicitud de alquiler confirmada!
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Has alquilado el vehículo <strong>{vehicleName}</strong> por <strong>{days}</strong> días.
              El importe total es de <strong>{totalPrice} €</strong>.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Nuestro equipo se pondrá en contacto contigo para confirmar los detalles.
            </p>
            <Button asChild>
              <Link href="/inventory">Ver más vehículos</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
