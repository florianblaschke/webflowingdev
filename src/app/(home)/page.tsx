import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Game from "@/components/Games/TicTacToe/TicTacToe";
import TechStack from "@/components/TechStack";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";

const apps = ["Beanerd", "Repairdoc", "Matt-Eats"];

export default function Home() {
  return (
    <>
      <section className="from-black from-40% to-gray-900 bg-gradient-to-b">
        <h1 className="px-10 pb-10 tracking-tighter text-[2.5rem] md:text-9xl bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          Frontend and Fullstack Webdevelopment
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
      <section className="min-h-fit pb-10 flex flex-col items-center from-gray-900 to-black bg-gradient-to-b">
        <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          What I have built so far
        </h3>
        <article className="flex gap-2">
          {apps.map((entry) => (
            <Card className="h-72 bg-green-100" key={entry}>
              <CardTitle>{entry}</CardTitle>
              <CardContent>Picture of my App </CardContent>
            </Card>
          ))}
        </article>
      </section>
      <section className="min-h-fit pb-10 flex flex-col justify-center items-center">
        <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          What I am working with
        </h3>
        <TechStack />
      </section>
      <section className="min-h-fit pb-10 flex flex-col justify-center items-center">
        <h3 className="p-10 text-5xl font-medium tracking-tighter bg-gradient-to-br from-green-400 to-green-100 bg-clip-text text-transparent">
          While you are here
        </h3>
        <Game />
      </section>
      <Contact />
      <Footer />
    </>
  );
}
