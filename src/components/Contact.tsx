"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Inputs, schema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { sendEmail } from "@/lib/serverActions";
import { useToast } from "./ui/Use-toast";

export default function Contact() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { toast } = useToast();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data);
    console.log(result);
    /* if (result?.success) {
      form.reset();
      return toast({
        variant: "hulk",
        title: "Thank you!",
        description:
          "I have received your request and will contact you shortly.",
      });
    }
    if (!result?.success) {
      return toast({
        variant: "hulk",
        title: "Oops. Something went wrong",
        description: "Please try again!",
      });
    } */
  };

  return (
    <section className="min-h-fit pb-10 flex flex-col justify-center items-center">
      <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        Want to work with me?
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center w-auto gap-2"
        >
          <div className=" md:flex gap-1 p-2 justify-between">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="px-2 w-80 pl-0">
                  <FormLabel className="text-green-100">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Mike Exampleman" {...field} />
                  </FormControl>
                  <FormDescription>
                    However you like to be called
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:px-2 w-80 md:pr-0">
                  <FormLabel className="text-green-100">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="examplemail@someprovider.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your email so I can contact you
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full px-2">
                <FormLabel className="text-green-100">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message" {...field} />
                </FormControl>
                <FormDescription>How can I help you?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="from-green-300 to-green-200 bg-clip-text bg-gradient-to-br text-transparent border border-green-100"
          >
            Contact me
          </Button>
        </form>
      </Form>
    </section>
  );
}
