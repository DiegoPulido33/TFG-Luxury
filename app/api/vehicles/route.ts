import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Vehicle from "@/models/Vehicle";

export async function GET() {
  await connectToDatabase();
  const vehicles = await Vehicle.find({});
  return NextResponse.json(vehicles);
}
