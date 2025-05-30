// CONECTAR A LA BASE DE DATOS Y SEMBRAR CON DATOS INICIALES

// import mongoose from "mongoose";
// import Vehicle from "../models/Vehicle";
// // import { vehicleData } from "../data/vehicleData";

// import * as dotenv from 'dotenv';
// dotenv.config();

// async function seed() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI!);
//     console.log("Connected to DB");

//     // const vehicles = Object.values(vehicleData);

//     await Vehicle.deleteMany({});
//     await Vehicle.insertMany(vehicles);

//     console.log("Seed data inserted");
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }

// seed();
