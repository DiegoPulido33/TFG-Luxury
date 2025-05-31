import mongoose from "mongoose";

const PurchaseRequestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  country: String,
  postalCode: String,
  paymentMethod: String,
  vehicleName: String,
  price: String,
  createdAt: { type: Date, default: Date.now },
});

export const PurchaseRequest =
  mongoose.models.PurchaseRequest || mongoose.model("PurchaseRequest", PurchaseRequestSchema);
