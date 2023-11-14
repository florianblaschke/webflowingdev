"use client";
import { motion } from "framer-motion";

export default function Greeting() {
  return (
    <section className="bg-black">
      <h1 className="px-10 text-center flex flex-col items-center text-7xl md:text-9xl bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent shrink-0">
        <span>Junior</span>
        <div className="flex justify-center items-center h-32 overflow-hidden max-w-[300px] md:max-w-[520px] md:min-w-[520px]">
          <motion.div
            className="min-w-[840px] md:min-w-[1560px] overflow-clip shrink-0 flex justify-center"
            animate={{
              opacity: [
                "100%",
                "0%",
                "100%",
                "100%",
                "0%",
                "0%",
                "100%",
                "100%",
                "0%",
                "0%",
                "100%",
                "0%",
              ],
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
            transition={{
              ease: "easeIn",
              duration: 9,
              repeat: Infinity,
              times: [3, 6, 9],
            }}
          >
            <span className="min-w-[300px] md:min-w-[520px] relative bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
              Frontend
            </span>
            <span className="min-w-[300px] md:min-w-[520px] relative bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
              Web
            </span>
            <span className="min-w-[300px] w-fit md:min-w-[520px] relative bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
              FullStack
            </span>
          </motion.div>
        </div>
        <span>Developer</span>
      </h1>
      <article className="h-96 flex flex-col items-center justify-center bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
        <h2 className="text-xl font-normal text-center">
          Hi! I am Florian and I love coding and challenges ...and coffee!
        </h2>
        <p>
          So feel free to challenge me to build your dream Website or even a
          FullStack WebApp!
        </p>
      </article>
    </section>
  );
}
