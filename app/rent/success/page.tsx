import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RentSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center">
        <div className="container py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-4">
              ¡Solicitud de alquiler confirmada!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Hemos recibido su solicitud de alquiler. Nuestro equipo se pondrá
              en contacto con usted cuanto antes, para aclarar los detalles.
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
