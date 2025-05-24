"use client";

import { SiteHeader } from "@/components/site-header";
import { VehicleGrid } from "@/components/vehicle-grid";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

interface CategoryContentProps {
  data: {
    title: string;
    description: string;
    vehicles: Array<{
      id: number;
      name: string;
      price: string;
      image: string;
    }>;
  };
  category: string;
}

export function CategoryContent({ data, category }: CategoryContentProps) {
  const formattedCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="w-full max-w-6xl mt-4 px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/inventory">Vehículos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{formattedCategory}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <main className="flex-1">
        <section className="container py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              {data.title}
            </h1>
            <p className="text-lg text-muted-foreground">{data.description}</p>
          </div>
          <VehicleGrid vehicles={data.vehicles} />
        </section>
      </main>
    </div>
  );
}
