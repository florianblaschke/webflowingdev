"use server";

import { Resend } from "resend";
import { ZodError } from "zod";
import { Inputs, schema } from "./validators";

export async function sendEmail(data: Inputs) {
  try {
    const valid = schema.safeParse(data);

    if (!valid.success) {
      return { success: false };
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.WEB_DEV_EMAIL!,
      to: [process.env.EMAIL!],
      subject: "Contact from " + valid.data.name + " " + valid.data.email,
      html: valid.data.message,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      return { message: error.message };
    }
    if (error instanceof ZodError) {
      return { message: error.message };
    }
  }
}
