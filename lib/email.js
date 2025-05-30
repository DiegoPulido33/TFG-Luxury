import SibApiV3Sdk from "sib-api-v3-sdk";

export async function sendEmail({ subject, htmlContent, toEmail, toName }) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("Falta BREVO_API_KEY en las variables de entorno");

  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  defaultClient.authentications["api-key"].apiKey = apiKey;

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  const emailData = {
    sender: { name: "Web LuxuryMotors", email: "puvero22@gmail.com" }, // Asegúrate de que esté verificado
    to: [{ email: toEmail, name: toName }],
    subject,
    htmlContent,
    bcc: [{ email: "puvero22@gmail.com", name: "Administrador" }], // <-- opcional
  };

  return apiInstance.sendTransacEmail(emailData);
}
