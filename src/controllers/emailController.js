import { sendEmail } from "../utils/email.js";


// CONTACT
export const contactForm = async (req, res) => {
  try {
    const { name, mobile, email, support, category } = req.body;

    const html = `
      <h2>Contact Request</h2>
      <p>Name: ${name}</p>
      <p>Mobile: ${mobile}</p>
      <p>Email: ${email}</p>
      <p>Support: ${support}</p>
      <p>Category: ${category}</p>
    `;

    await sendEmail({
      subject: "New Contact Form",
      html,
      to: process.env.USER_EMAIL,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// NEWSLETTER
export const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    const html = `<h3>New Subscriber: ${email}</h3>`;

    await sendEmail({
      subject: "Newsletter Subscription",
      html,
      to: process.env.USER_EMAIL,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// JOB APPLY
export const applyJob = async (req, res) => {
  try {
    const { jobTitle, experience, email } = req.body;
    const file = req.file;
    let attachment = null;

    if (file) {
      attachment = {
        filename: file.originalname,
        mimetype: file.mimetype,
        content: file.buffer.toString("base64"), // 🔥 IMPORTANT
      };
    }

    const html = `
      <h2>Job Application</h2>
      <p>Job: ${jobTitle}</p>
      <p>Experience: ${experience}</p>
      <p>Email: ${email}</p>
    `;

    await sendEmail({
      subject: "New Job Application",
      html,
      to: process.env.USER_EMAIL,
      attachment, // ✅ attach here
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};