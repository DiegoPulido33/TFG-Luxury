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
    const data = await res.json();
    // Extraer solo los números del precio (eliminar "€", "/día", etc.)
    data.rentPrice =
      parseFloat(data.rentPrice.replace(/[^\d.,]/g, "").replace(",", ".")) || 0;
    return data;
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

  const [days, setDays] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateError, setDateError] = useState<string | null>(null);

  useEffect(() => {
    fetchVehicle(params.id).then(setVehicle);
  }, [params.id]);

  useEffect(() => {
    if (!formData.startDate || !formData.endDate || !vehicle) {
      setDays(0);
      setTotalPrice(0);
      setDateError(null);
      return;
    }

    const start = new Date(formData.startDate);
    const end = new Date(formData.endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (start < today) {
      setDateError("La fecha de inicio debe ser hoy o en el futuro");
      setDays(0);
      setTotalPrice(0);
      return;
    }
    if (end <= start) {
      setDateError("La fecha de fin debe ser posterior a la fecha de inicio");
      setDays(0);
      setTotalPrice(0);
      return;
    }

    setDateError(null);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDays(diffDays);

    // Usamos directamente vehicle.rentPrice que ya fue convertido a número
    setTotalPrice(diffDays * vehicle.rentPrice);
  }, [formData.startDate, formData.endDate, vehicle]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dateError) {
      alert(dateError);
      return;
    }

    try {
      const res = await fetch("/api/rent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicleId: params.id,
          vehicleName: vehicle.name,
          rentPrice: vehicle.rentPrice,
          days,
          totalPrice,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.message || "Error al enviar formulario");
        return;
      }

      router.push(
        `/rent/success?days=${days}&totalPrice=${totalPrice}&vehicleName=${encodeURIComponent(
          vehicle.name
        )}`
      );
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

  if (!vehicle) {
    return <div className="p-10 text-center">Cargando vehículo...</div>;
  }

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
              <CardTitle>Alquilar {vehicle.name}</CardTitle>
              <CardDescription>
                Precio por día: {vehicle.rentPrice.toFixed(2)} €
              </CardDescription>
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
                  <Label htmlFor="email">Correo electrónico</Label>
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
                    <Label htmlFor="startDate">Fecha de inicio</Label>
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
                    <Label htmlFor="endDate">Fecha de fin</Label>
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

                {dateError && (
                  <p className="text-red-600 font-semibold">{dateError}</p>
                )}

                <div className="space-y-2">
                  <Label htmlFor="deliveryAddress">Dirección de entrega</Label>
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
                    Solicitudes especiales (opcional)
                  </Label>
                  <Input
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Días de alquiler:</span>
                    <span>{days}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Precio por día:</span>
                    <span>{vehicle.rentPrice.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold mt-2">
                    <span>Total estimado:</span>
                    <span>{totalPrice.toFixed(2)} €</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!!dateError || days === 0}
                  className="w-full mt-6"
                >
                  Confirmar Alquiler
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
