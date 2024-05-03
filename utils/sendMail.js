import { createTransport } from "nodemailer";

export const sendMail = async (email, subject, text) => {
  const transport = createTransport({
    host: process.env.SMPT_SECRET,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_USER,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  await transport.sendMail({
    from: "rohit.tehbot@gmail.com",
    to: email,
    subject,
    text,
  });
};
