"use server";

import { Resend } from "resend";
import { ZodError } from "zod";
import { Inputs, schema } from "./validators";

export async function sendEmail(data: Inputs) {
  try {
    const valid = schema.safeParse(data);

    if (!valid.success) {
      console.log(valid.error);
      return { success: false };
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "webflowingdevelopment.gmail.com",
      to: [process.env.EMAIL!],
      subject: "Contact",
      html: "Hello",
    });

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error);
      return { message: error.message };
    }
    if (error instanceof ZodError) {
      console.log("zod", error);
      return { message: error.message };
    }
  }
}
