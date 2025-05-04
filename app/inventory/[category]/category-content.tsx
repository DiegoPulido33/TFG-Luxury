"use client"

import { SiteHeader } from "@/components/site-header"
import { VehicleGrid } from "@/components/vehicle-grid"

interface CategoryContentProps {
  data: {
    title: string
    description: string
    vehicles: Array<{
      id: number
      name: string
      price: string
      image: string
    }>
  }
}

export function CategoryContent({ data }: CategoryContentProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">{data.title}</h1>
            <p className="text-lg text-muted-foreground">
              {data.description}
            </p>
          </div>
          <VehicleGrid vehicles={data.vehicles} />
        </section>
      </main>
    </div>
  )
}