import mongoose from "mongoose";

const RentalRequestSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  licenseNumber: { type: String, required: true, trim: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  deliveryAddress: { type: String, required: true, trim: true },
  specialRequests: { type: String, trim: true, default: "" },
  vehicleName: { type: String, required: true, trim: true },
  rentPrice: { type: Number, required: true }, 
  createdAt: { type: Date, default: Date.now },
});

export const RentalRequest =
  mongoose.models.RentalRequest || mongoose.model("RentalRequest", RentalRequestSchema);
