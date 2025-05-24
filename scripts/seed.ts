import { vehicleData } from "../data/vehicleData";
import clientPromise from "../lib/mongodb";

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function seed() {
  const client = await clientPromise;
  const db = client.db("LuxuryMotors");
  const collection = db.collection("vehicles");

  await collection.deleteMany({});
  await collection.insertMany(Object.values(vehicleData));

  console.log("🚗 Vehículos insertados con éxito");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
