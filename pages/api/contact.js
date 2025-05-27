import SibApiV3Sdk from "sib-api-v3-sdk"

// Define los orígenes permitidos para evitar envíos desde fuentes no confiables
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://tfg-luxury-chi.vercel.app/",
]

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const origin = req.headers.origin || req.headers.referer
  if (!allowedOrigins.some((allowed) => origin?.startsWith(allowed))) {
    return res.status(403).json({ message: "Origen inválido" })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" })
  }

  // Configuración de la API de Brevo
  const client = SibApiV3Sdk.ApiClient.instance
  const apiKey = client.authentications["api-key"]
  apiKey.apiKey = process.env.BREVO_API_KEY

  const transactionalEmailApi = new SibApiV3Sdk.TransactionalEmailsApi()

  const emailData = {
    sender: { email: "info@luxurymotors.com", name: "WEB LuxuryMotors" },
    to: [{ email: "info@luxurymotors.com", name: "WEB LuxuryMotors" }],
    subject: subject,
    htmlContent: `
      <h2>Nuevo envió de formulario de la web!</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  }

  try {
    await transactionalEmailApi.sendTransacEmail(emailData)
    return res.status(200).json({ message: "Mensaje enviado correctamente" })
  } catch (error) {
    console.error("Error enviando email:", error)
    return res.status(500).json({ message: "Error al enviar el mensaje" })
  }
}

