import nodemailer from "nodemailer";
import "dotenv/config";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default async function sendMail(email: string, text: string) {
  await transport.sendMail({
    from: "TripMatch <tripmatch@elice.io>",
    to: email,
    subject: "Welcome to TripMatch",
    text,
  });
}
