"use client";

import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface VehicleContentProps {
  vehicle: {
    id: string;
    name: string;
    price: string;
    rentPrice: string;
    description: string;
    specs: Record<string, string>;
    images: string[];
    category: string; // Asegúrate de que esta propiedad esté presente
  };
}

export function VehicleContent({ vehicle }: VehicleContentProps) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <SiteHeader />
      <div className="w-full max-w-6xl mt-8 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/inventory">Vehículo  </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/inventory/${vehicle.category}`}>
                {vehicle.category.charAt(0).toUpperCase() +
                  vehicle.category.slice(1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{vehicle.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex-1 w-full">
        <div className="container py-24">
          <div className="mb-12">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {vehicle.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${vehicle.name} - Imagen ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-center md:text-left">
                  {vehicle.name}
                </h1>
                <p className="text-3xl font-bold text-primary mb-1 text-center md:text-left">
                  {vehicle.price}
                </p>
                <p className="text-lg text-muted-foreground text-center md:text-left">
                  Renta: {vehicle.rentPrice}
                </p>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button size="lg" asChild>
                  <Link href={`/purchase/${vehicle.id}`}>Comprar</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href={`/rent/${vehicle.id}`}>Alquilar</Link>
                </Button>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-12 text-center md:text-left">
              <p className="text-lg">{vehicle.description}</p>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
                Especificaciones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(vehicle.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-sm text-muted-foreground capitalize">
                      {key}
                    </span>
                    <span className="text-lg font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
