import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Vehicle from "@/models/Vehicle";

export async function GET(req: NextRequest) {
  await connectToDatabase();

  const id = req.nextUrl.pathname.split("/").pop(); // Extrae el ID de la URL

  if (!id) {
    return new NextResponse("ID not provided", { status: 400 });
  }

  const vehicle = await Vehicle.findOne({ id });

  if (!vehicle) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.json(vehicle);
}
