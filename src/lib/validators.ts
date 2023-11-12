import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, { message: "Please enter a valid name" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z.string().min(20, { message: "That's too short..." }).max(255, {
    message:
      "For our first contact this message is too long. Let's talk more during a cup of coffee.",
  }),
});

export type Inputs = z.infer<typeof schema>;
