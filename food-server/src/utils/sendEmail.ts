import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
    pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
  },
});

export const sendEmail = async (email: string, subject: string) => {
  const info = await transport.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: "Hello world",
    html: generateTemplate(email),
  });
};

const generateTemplate = (name: string) => {
  return `
    <div>
        <h2>Hello ${name}</h2>
        <h1>Welcome to our platform!</h1>
        <p>Please click on the following link to verify your account.</p>
        <a href="https://www.google.com">Verify account</a>
    </div>`;
};
