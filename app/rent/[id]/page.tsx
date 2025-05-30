"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function fetchVehicle(id: string) {
  try {
    const res = await fetch(`/api/vehicles/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error("Error fetching vehicle:", err);
    return null;
  }
}

export default function RentPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [vehicle, setVehicle] = useState<any | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    startDate: "",
    endDate: "",
    deliveryAddress: "",
    specialRequests: "",
  });

  useEffect(() => {
    fetchVehicle(params.id).then(setVehicle);
  }, [params.id]);

  if (!vehicle) {
    return <div className="p-10 text-center">Cargando vehículo...</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/rent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, vehicleName: vehicle.name }),
      });

      if (!res.ok) throw new Error("Error al enviar formulario");
      router.push("/rent/success");
    } catch (error) {
      alert("Hubo un error al enviar el formulario.");
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex justify-center items-center min-h-screen">
        <div className="w-full px-4">
          <h1 className="text-3xl font-bold text-center mb-6">
            Alquilar - {vehicle.name}
          </h1>

          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Rent {vehicle.name}</CardTitle>
              <CardDescription>Daily Rate: {vehicle.rentPrice}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,40}$"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellidos</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,40}$"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="^\+?[0-9\s\-]{7,15}$"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="licenseNumber">
                    Número de licencia de conducir
                  </Label>
                  <Input
                    id="licenseNumber"
                    name="licenseNumber"
                    required
                    pattern="^[A-Z0-9\-]{5,20}$"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Inicio fecha</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">Fin fecha</Label>
                    <Input
                      id="endDate"
                      name="endDate"
                      type="date"
                      required
                      value={formData.endDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryAddress">Dirección de entrega </Label>
                  <Input
                    id="deliveryAddress"
                    name="deliveryAddress"
                    required
                    pattern="^.{5,100}$"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">
                    Solicitudes especiales
                  </Label>
                  <Input
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Proceder con el alquiler
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
