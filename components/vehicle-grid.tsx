"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Vehicle {
  id: number
  name: string
  price: string
  image: string
}

interface VehicleGridProps {
  vehicles: Vehicle[] 
}

export function VehicleGrid({ vehicles }: VehicleGridProps) {
  return (
    <div className="flex min-h-screen justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group overflow-hidden mt-20">
              <CardHeader className="p-0">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{vehicle.name}</CardTitle>
                <p className="text-2xl font-bold text-primary mb-4">{vehicle.price}</p>
                <Button asChild>
                  <Link href={`/vehicle/${vehicle.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
