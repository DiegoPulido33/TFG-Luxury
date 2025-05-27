import mongoose, { Schema, Document, Model } from "mongoose";

export interface IVehicle extends Document {
  id: string;
  name: string;
  price: string;
  rentPrice: string;
  description: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    transmission: string;
    drivetrain: string;
    interior: string;
  };
  images: string[];
  category: string;
}

const VehicleSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  rentPrice: { type: String, required: true },
  description: { type: String, required: true },
  specs: {
    engine: String,
    power: String,
    acceleration: String,
    transmission: String,
    drivetrain: String,
    interior: String,
  },
  images: [String],
  category: String,
});

const Vehicle: Model<IVehicle> = mongoose.models.Vehicle || mongoose.model("Vehicle", VehicleSchema);

export default Vehicle;
