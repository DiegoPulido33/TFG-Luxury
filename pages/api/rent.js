import connectToDatabase from "@/lib/mongodb";
import { RentalRequest } from "@/models/RentalRequest";
import { sendEmail } from "@/lib/email";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const allowedOrigins = [
    "http://localhost:3000",
    "https://tfg-luxury-chi.vercel.app",
  ];
  const origin = req.headers.origin || req.headers.referer;
  if (!allowedOrigins.some((o) => origin?.startsWith(o))) {
    return res.status(403).json({ message: "Origen inválido" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    licenseNumber,
    startDate,
    endDate,
    deliveryAddress,
    specialRequests,
    vehicleName,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !licenseNumber ||
    !startDate ||
    !endDate ||
    !deliveryAddress ||
    !vehicleName
  ) {
    return res.status(400).json({ message: "Faltan campos requeridos" });
  }

  try {
    await connectToDatabase();
    await RentalRequest.create({
      firstName,
      lastName,
      email,
      phone,
      licenseNumber,
      startDate,
      endDate,
      deliveryAddress,
      specialRequests,
      vehicleName,
    });

    const htmlContent = `
      <h2>Solicitud de Alquiler</h2>
      <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Licencia:</strong> ${licenseNumber}</p>
      <p><strong>Vehículo:</strong> ${vehicleName}</p>
      <p><strong>Desde:</strong> ${startDate}</p>
      <p><strong>Hasta:</strong> ${endDate}</p>
      <p><strong>Dirección entrega:</strong> ${deliveryAddress}</p>
      <p><strong>Solicitudes especiales:</strong> ${
        specialRequests || "Ninguna"
      }</p>
    `;

    await sendEmail({
      subject: `Confirmación de alquiler: ${vehicleName}`,
      htmlContent,
      toEmail: email,
      toName: `${firstName} ${lastName}`,
    });

    return res.status(200).json({ message: "Solicitud enviada correctamente" });
  } catch (error) {
    console.error("Error procesando solicitud de alquiler:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
}
