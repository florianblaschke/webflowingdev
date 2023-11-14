"use client";
import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <section className="bg-black">
      <h1 className="px-10 text-center flex flex-col items-center text-7xl md:text-9xl bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent shrink-0">
        <span>Junior</span>
        <div className="flex justify-center items-center h-32 overflow-hidden max-w-[300px] md:max-w-[520px] md:min-w-[520px]">
          <motion.div
            className="min-w-[900px] md:min-w-[1590px] overflow-clip shrink-0 flex justify-center"
            animate={{
              translateX: [
                "0%",
                "-33%",
                "-33%",
                "0%",
                "0%",
                "33%",
                "33%",
                "0%",
                "0%",
              ],
            }}
            transition={{ ease: "anticipate", duration: 10, repeat: Infinity }}
          >
            <span className="min-w-[310px] md:min-w-[530px] relative bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
              Frontend
            </span>
            <span className="min-w-[310px] md:min-w-[530px] relative bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
              Web
            </span>
            <span className="min-w-[310px] w-fit md:min-w-[530px] relative bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
              FullStack
            </span>
          </motion.div>
        </div>
        <span>Developer</span>
      </h1>
      <article className="h-96 px-10 flex flex-col items-center justify-center text-center text-xl bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        <h2 className="text-xl font-normal text-center">
          I am Florian and I started my developer journey this year.
        </h2>
        Besides being an enourmes coffee geek I work on becoming a total nerd in
        Webdevelopment as well.
        <p className="pt-5">
          Currently I am looking for my first job – so maybe hire me?
        </p>
      </article>
    </section>
  );
}
