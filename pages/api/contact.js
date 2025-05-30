import { sendEmail } from "@/lib/email";

export default async function handler(req, res) {
  console.log("📩 Formulario recibido:", req.body)

  if (req.method !== "POST")
    return res.status(405).json({ message: "Método no permitido" });

  const allowedOrigins = [
    "http://localhost:3000",
    "https://tfg-luxury-chi.vercel.app",
  ];
  const origin = req.headers.origin || req.headers.referer;
  if (!allowedOrigins.some((o) => origin?.startsWith(o))) {
    return res.status(403).json({ message: "Origen inválido" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  const htmlContent = `
    <h2>Gracias por contactarnos, ${name}</h2>
    <p>Hemos recibido tu mensaje y te responderemos pronto.</p>
    <hr/>
    <p><strong>Mensaje enviado:</strong></p>
    <p>${message}</p>
  `;

  try {
    await sendEmail({
      subject: `Confirmación de contacto: ${subject}`,
      htmlContent,
      toEmail: email,
      toName: name,
    });

    return res.status(200).json({ message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error("Error enviando email:", error);
    return res.status(500).json({ message: "Error al enviar el mensaje" });
  }
}
