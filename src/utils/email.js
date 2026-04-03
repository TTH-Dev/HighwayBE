import axios from "axios";
import { getAccessToken } from "./refreshtoken.js";

// export const sendEmail = async ({ subject, html, to }) => {
//   const token = await getAccessToken();

//   try {
//     await axios.post(
//       `https://graph.microsoft.com/v1.0/users/${process.env.USER_EMAIL}/sendMail`,
//       {
//         message: {
//           subject,
//           body: {
//             contentType: "HTML",
//             content: html,
//           },
//           toRecipients: [
//             {
//               emailAddress: {
//                 address: to,
//               },
//             },
//           ],
//         },
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (err) {
//     console.error("❌ MAIL ERROR:", err.response?.data || err.message);
//     throw err;
//   }
// };


export const sendEmail = async ({ subject, html, to, attachment }) => {
  const token = await getAccessToken();

  const message = {
    subject,
    body: {
      contentType: "HTML",
      content: html,
    },
    toRecipients: [
      {
        emailAddress: {
          address: to,
        },
      },
    ],
  };

  // ✅ Attach file if exists
  if (attachment) {
    message.attachments = [
      {
        "@odata.type": "#microsoft.graph.fileAttachment",
        name: attachment.filename,
        contentType: attachment.mimetype,
        contentBytes: attachment.content,
      },
    ];
  }

  await axios.post(
    `https://graph.microsoft.com/v1.0/users/${process.env.USER_EMAIL}/sendMail`,
    { message },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
};