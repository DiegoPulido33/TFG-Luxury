import mongoose from "mongoose";

const ContactRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

export const ContactRequest =
  mongoose.models.ContactRequest || mongoose.model("ContactRequest", ContactRequestSchema);
