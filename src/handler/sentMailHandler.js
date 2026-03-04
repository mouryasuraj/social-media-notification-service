import {env, mailer } from "../config/index.js";
import generateEmailStructure from "../utils/generateEmailStructure.js";

export const sentMailHandler = async (value) => {
  if (!value) throw new Error("Value is missing");

  const {email, subject, body} = generateEmailStructure(value)

  const res = await mailer.sendMail({
    to: email,
    from: env.MAIL_FROM,
    html: body,
    subject: subject,
  });

  console.log("Mail has been sent successfully", res);
};

