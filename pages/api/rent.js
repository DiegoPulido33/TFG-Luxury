
import connectToDatabase from "@/lib/mongodb";
import { RentalRequest } from "@/models/RentalRequest";
import { sendEmail } from "@/lib/email";

export default async function handler(req , res ) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Método no permitido" });

  const allowedOrigins = [
    "http://localhost:3000",
    "https://tfg-luxury-chi.vercel.app",
  ];
  const origin = req.headers.origin || req.headers.referer || "";
  if (!allowedOrigins.some((o) => origin.startsWith(o))) {
    return res.status(403).json({ message: "Origen inválido" });
  }

  const data = req.body;

  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "licenseNumber",
    "startDate",
    "endDate",
    "deliveryAddress",
    "vehicleName",
    "rentPrice",
  ];

  if (requiredFields.some((field) => !data[field])) {
    return res.status(400).json({ message: "Faltan campos requeridos" });
  }

  // Validación número de licencia
  const licenseRegex = /^[A-Z0-9\-]{5,20}$/;
  if (!licenseRegex.test(data.licenseNumber)) {
    return res.status(400).json({ message: "Número de licencia inválido" });
  }

  // Validar fechas
  const now = new Date();
  const start = new Date(data.startDate);
  const end = new Date(data.endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return res.status(400).json({ message: "Fechas inválidas" });
  }

  // La fecha de inicio debe ser hoy o en el futuro (ignora hora)
  const today = new Date(now.toDateString());
  if (start < today) {
    return res.status(400).json({ message: "La fecha de inicio debe ser hoy o en el futuro" });
  }

  if (end <= start) {
    return res.status(400).json({ message: "La fecha de fin debe ser posterior a la de inicio" });
  }

  const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = days * data.rentPrice;

  await connectToDatabase();

  // Evitar reservas solapadas para mismo vehículo
  const overlappingRental = await RentalRequest.findOne({
    vehicleName: data.vehicleName,
    $or: [
      {
        startDate: { $lte: end },
        endDate: { $gte: start },
      },
    ],
  });

  if (overlappingRental) {
    return res.status(409).json({ message: "El vehículo ya está alquilado en esas fechas" });
  }

  // Guardar la solicitud
  const rentalDoc = await RentalRequest.create({
    ...data,
    startDate: start,
    endDate: end,
    days,
    totalPrice,
  });

  const htmlContent = `
    <h2>Solicitud de Alquiler</h2>
    <p><strong>Nombre:</strong> ${data.firstName} ${data.lastName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Teléfono:</strong> ${data.phone}</p>
    <p><strong>Licencia:</strong> ${data.licenseNumber}</p>
    <p><strong>Vehículo:</strong> ${data.vehicleName}</p>
    <p><strong>Desde:</strong> ${start.toLocaleDateString()}</p>
    <p><strong>Hasta:</strong> ${end.toLocaleDateString()}</p>
    <p><strong>Días de alquiler:</strong> ${days}</p>
    <p><strong>Precio total estimado:</strong> ${totalPrice} €</p>
    <p><strong>Dirección de entrega:</strong> ${data.deliveryAddress}</p>
    <p><strong>Solicitudes especiales:</strong> ${data.specialRequests || "Ninguna"}</p>
  `;

  try {
    await sendEmail({
      subject: `Confirmación de alquiler: ${data.vehicleName}`,
      htmlContent,
      toEmail: data.email,
      toName: `${data.firstName} ${data.lastName}`,
    });

    return res.status(200).json({
      message: "Solicitud enviada correctamente",
      days,
      totalPrice,
      rentalId: rentalDoc._id,
    });
  } catch (error) {
    console.error("Error enviando email de alquiler:", error);
    return res.status(500).json({ message: "Error al enviar la solicitud" });
  }
}
