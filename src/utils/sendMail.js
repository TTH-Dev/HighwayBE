import axios from "axios";
import { getAccessToken } from "./token.js";

export const sendMail = async () => {
  try {
    const accessToken = await getAccessToken();

    await axios.post(
      "https://graph.microsoft.com/v1.0/users/info@treadstoneis.co.uk/sendMail",
      {
        message: {
          subject: "🎉 Email Working",
          body: {
            contentType: "HTML",
            content: "<h2>Email sent using Microsoft Graph 🚀</h2>",
          },
          toRecipients: [
            {
              emailAddress: {
                address: "receiver@gmail.com",
              },
            },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email sent successfully");
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
};