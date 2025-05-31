import mongoose from "mongoose";

const RentalRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  licenseNumber: String,
  startDate: String,
  endDate: String,
  deliveryAddress: String,
  specialRequests: String,
  vehicleName: String,
  createdAt: { type: Date, default: Date.now },
});

export const RentalRequest =
  mongoose.models.RentalRequest || mongoose.model("RentalRequest", RentalRequestSchema);
